import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {PostgrestError} from "@supabase/supabase-js";
import UserSupabaseDataSource from "@/data/datasource/supabase/UserSupabaseDataSource.ts";
import {UserRepositoryDataSource} from "@/data/repository/UserRepositoryDataSource.ts";
import {UserSignIn} from "@/domain/usecase/user/UserSignIn.ts";
import {UserSignUp} from "@/domain/usecase/user/UserSignUp.ts";
import {useLocalStorage} from "usehooks-ts";
import {useLocation, useNavigate} from "react-router";
import {UserCheckConsent} from "@/domain/usecase/UserCheckConsent.ts";
import {UserCheckSurvey} from "@/domain/usecase/UserCheckSurvey.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {UserFinishConsent} from "@/domain/usecase/UserFinishConsent.ts";
import {UserFinishSurvey} from "@/domain/usecase/UserFinishSurvey.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {PublicUserInsert} from "@/domain/usecase/PublicUserInsert.ts";

interface UserContextType {
    user: User | null;
    setUser: (value: (((prevState: (User | null)) => (User | null)) | User | null)) => void;
    balance: number;
    setBalance: (value: (((prevState: number) => number) | number)) => void;
    login: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
    register: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
    logout: () => void;
    incBalance: (amount: number) => number;
    onConsent: () => void;
    onFinishSurvey: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {
    },
    balance: 0,
    setBalance: () => {
    },
    login: async () => Promise.reject(new Error("No UserProvider found")),
    register: async () => Promise.reject(new Error("No UserProvider found")),
    logout: () => {
    },
    incBalance: (amount: number) => amount,
    onConsent: () => {
    },
    onFinishSurvey: () => {
    },
});

export function UserProvider({children}: { children: ReactNode }) {
    const [value, setValue,] = useLocalStorage<User | null>('auth', null)
    const [user, setUser] = useState<User | null>(null);
    const [balance, setBalance] = useState<number>(1000000000);
    const location = useLocation();
    const navigate = useNavigate();

    const LOGIN_PATH = "/auth/login";
    const REGISTER_PATH = "/auth/register";
    const DEFAULT_PATH = "/app/beranda";
    const CONSENT_PATH = "/consent";
    const QUESTIONNAIRE_PATH = "/questionnaire";
    const WHITELIST_PATH = [LOGIN_PATH, REGISTER_PATH]
    const FROM = location.state?.from || DEFAULT_PATH;

    const userDataSource = useMemo(() => new UserSupabaseDataSource(), []);
    const userRepository = useMemo(() => new UserRepositoryDataSource(userDataSource), [userDataSource]);

    const userSignInUseCase = useMemo(() => new UserSignIn(userRepository), [userRepository]);
    const userSignIn = useCallback(async (data: InsertUser) => {
        return await userSignInUseCase.invoke(data);
    }, [userSignInUseCase]);

    const userSignUpUseCase = useMemo(() => new UserSignUp(userRepository), [userRepository]);
    const userSignUp = useCallback(async (data: InsertUser) => {
        return await userSignUpUseCase.invoke(data);
    }, [userSignUpUseCase]);

    const publicUserInsertUseCase = useMemo(() => new PublicUserInsert(userRepository), [userRepository]);
    const publicUserInsert = useCallback(async (data: InsertPublicUser) => {
        return await publicUserInsertUseCase.invoke(data);
    }, [publicUserInsertUseCase]);

    const userFinishConsentUseCase = useMemo(() => new UserFinishConsent(userRepository), [userRepository]);
    const userFinishConsent = useCallback(async (form: InsertUserConsentForm) => {
        return await userFinishConsentUseCase.invoke(form);
    }, [userFinishConsentUseCase]);

    const userFinishSurveyUseCase = useMemo(() => new UserFinishSurvey(userRepository), [userRepository]);
    const userFinishSurvey = useCallback(async (form: InsertUserFinishSurvey) => {
        return await userFinishSurveyUseCase.invoke(form);
    }, [userFinishSurveyUseCase]);

    const userCheckConsentUseCase = useMemo(() => new UserCheckConsent(userRepository), [userRepository]);
    const checkConsent = useCallback(async () => {
        if (user === null) {
            return {
                success: false,
                data: null,
                error: {message: "User is not logged in", details: "", hint: "", code: ""} as PostgrestError
            } as BaseSupabaseResponse<boolean>;
        }
        return await userCheckConsentUseCase.invoke(user.id);
    }, [userCheckConsentUseCase, user])
    const {
        data: hasConsentData,
        // error: hasConsentError,
        // loading: hasConsentLoading,
        refetch: hasConsentRefetch
    } = useSupabaseQuery(checkConsent);

    const userCheckSurveyUseCase = useMemo(() => new UserCheckSurvey(userRepository), [userRepository]);
    const checkSurvey = useCallback(async () => {
        if (user === null) {
            return {
                success: false,
                data: null,
                error: {message: "User is not logged in", details: "", hint: "", code: ""} as PostgrestError
            } as BaseSupabaseResponse<boolean>;
        }
        return await userCheckSurveyUseCase.invoke(user.id);
    }, [userCheckSurveyUseCase, user]);
    const {
        data: hasSurveyData,
        // error: hasSurveyError,
        // loading: hasSurveyLoading,
        refetch: hasSurveyRefetch
    } = useSupabaseQuery(checkSurvey);

    useEffect(() => {
        if (user === null) {
            if (value) {
                setUser(value)
            } else if (!WHITELIST_PATH.includes(location.pathname)) {
                navigate(LOGIN_PATH, {state: {from: location}});
            }
        } else if (user) {
            if (hasConsentData === false) {
                navigate(CONSENT_PATH, {state: {from: location}});
            } else if (hasSurveyData === false) {
                navigate(QUESTIONNAIRE_PATH, {state: {from: location}});
            }
        }
    }, [user, value, navigate, location]);

    async function login(data: InsertUser) {
        const res = await userSignIn(data);

        if (res.error) {
            console.log(res.error);
        } else if (res.data == null) {
            console.log(res);
        }

        setValue(res.data);
        setUser(res.data);
        hasConsentRefetch();
        hasSurveyRefetch();

        navigate(FROM, {replace: true})

        return res;
    }

    async function register(data: InsertUser) {
        const res = await userSignUp(data);

        if (res.error) {
            console.log(res.error);
            return res;
        } else if (res.data == null) {
            console.log(res);
            return res;
        }

        const userId = res.data.id;

        await Promise.allSettled([
            userFinishConsent({
                user_id: userId,
                consent_agreement: false
            }),
            userFinishSurvey({
                user_id: userId,
                has_finished: false
            })
        ]);

        navigate(LOGIN_PATH, {replace: true});

        return res;
    }

    function logout() {
        setValue(null);
        setUser(null);
    }

    function incBalance(amount: number) {
        setBalance((prev) => prev + amount);
        return balance;
    }

    function onConsent() {
        if (user === null || user.id == null) return;
        userFinishConsent({
            user_id: user.id,
            consent_agreement: true
        });
    }

    function onFinishSurvey() {
        if (user === null || user.id == null) return;
        userFinishSurvey({
            user_id: user.id,
            has_finished: true
        });
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            balance,
            setBalance,
            login,
            register,
            logout,
            incBalance,
            onConsent,
            onFinishSurvey
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

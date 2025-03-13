import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {AuthResponse, User} from "@supabase/supabase-js";
import UserSupabaseDataSource from "@/data/datasource/supabase/UserSupabaseDataSource.ts";
import {UserRepositoryDataSource} from "@/data/repository/UserRepositoryDataSource.ts";
import {UserSignIn} from "@/domain/usecase/UserSignIn.ts";
import {UserSignUp} from "@/domain/usecase/UserSignUp.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocalStorage} from "usehooks-ts";
import {isAuthenticated} from "@/lib/utils.ts";
import {redirect, useLocation, useNavigate} from "react-router";
import {UserCheckConsent} from "@/domain/usecase/UserCheckConsent.ts";
import {UserCheckSurvey} from "@/domain/usecase/UserCheckSurvey.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {UserFinishConsent} from "@/domain/usecase/UserFinishConsent.ts";
import {UserFinishSurvey} from "@/domain/usecase/UserFinishSurvey.ts";

interface UserContextType {
    user: User | null;
    setUser: (value: (((prevState: (User | null)) => (User | null)) | User | null)) => void;
    balance: number;
    setBalance: (value: (((prevState: number) => number) | number)) => void;
    login: (email: string, password: string) => Promise<AuthResponse>;
    register: (email: string, password: string) => Promise<AuthResponse>;
    logout: () => void;
    incBalance: (amount: number) => number;
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
    incBalance: (amount: number) => amount
});

export function UserProvider({children}: { children: ReactNode }) {
    const [value, setValue, ] = useLocalStorage<AuthResponse | null>('auth', null)
    const [user, setUser] = useState<User | null>(null);
    const [balance, setBalance] = useState<number>(1000000000);
    const {toast} = useToast();
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

    const userSignInUseCase = useMemo(() => new UserSignIn(userDataSource), [userRepository]);
    const userSignIn = useCallback(async (email: string, password: string) => {
        return await userSignInUseCase.invoke(email, password);
    }, [userSignInUseCase]);

    const userSignUpUseCase = useMemo(() => new UserSignUp(userRepository), [userRepository]);
    const userSignUp = useCallback(async (email: string, password: string) => {
        return await userSignUpUseCase.invoke(email, password);
    }, [userSignUpUseCase])

    const userFinishConsentUseCase = useMemo(() => new UserFinishConsent(userRepository), [userRepository]);
    const userFinishConsent = useCallback(async (form : InsertUserConsentForm) => {
        return await userFinishConsentUseCase.invoke(form);
    }, [userFinishConsentUseCase]);

    const userFinishSurveyUseCase = useMemo(() => new UserFinishSurvey(userRepository), [userRepository]);
    const userFinishSurvey = useCallback(async (form : InsertUserFinishSurvey) => {
        return await userFinishSurveyUseCase.invoke(form);
    }, [userFinishSurveyUseCase]);

    const userCheckConsentUseCase = useMemo(() => new UserCheckConsent(userRepository), [userRepository]);
    const checkConsent = useCallback(async () => {
        if(user === null) return false;
        return await userCheckConsentUseCase.invoke(user.id);
    }, [userCheckConsentUseCase, user])
    const {
        data: hasConsentData,
        error: hasConsentError,
        loading: hasConsentLoading,
        refetch: hasConsentRefetch
    } = useSupabaseQuery(checkConsent);

    const userCheckSurveyUseCase = useMemo(() => new UserCheckSurvey(userRepository), [userRepository]);
    const checkSurvey = useCallback(async () => {
        if (user === null) return false;
        return await userCheckSurveyUseCase.invoke(user.id);
    }, [userCheckSurveyUseCase, user])
    const {
        data: hasSurveyData,
        error: hasSurveyError,
        loading: hasSurveyLoading,
        refetch: hasSurveyRefetch
    } = useSupabaseQuery(checkSurvey);

    useEffect(() => {
        if (user === null) {
            if (isAuthenticated(value?.data.session)) {
                if (value?.data.user) {
                    setUser(value.data.user);
                } else if (!WHITELIST_PATH.includes(location.pathname)) {
                    navigate(LOGIN_PATH, { state: { from: location } });
                }
            } else if (!WHITELIST_PATH.includes(location.pathname)) {
                navigate(LOGIN_PATH, { state: { from: location } });
            }
        } else if (user) {
            if (hasConsentData === false) {
                navigate(CONSENT_PATH, { state: { from: location } });
            } else if (hasSurveyData === false) {
                navigate(QUESTIONNAIRE_PATH, { state: { from: location } });
            }
        }
    }, [user, value, navigate, location]);

    async function login(email: string, password: string) {
        const res = await userSignIn(email, password);

        if(res.error) {
            console.log(res.error);
        } else if (res.data.user == null) {
            console.log(res);
        }

        setValue(res);
        setUser(res.data.user);
        hasConsentRefetch();
        hasSurveyRefetch();

        navigate(FROM, {replace: true})

        return res;
    }

    async function register(email: string, password: string) {
        const res = await userSignUp(email, password);

        if(res.error) {
            console.log(res.error);
        } else if (res.data.user == null) {
            console.log(res);
        }

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

    }

    return (
        <UserContext.Provider value={{user, setUser, balance, setBalance, login, register, logout, incBalance}}>
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

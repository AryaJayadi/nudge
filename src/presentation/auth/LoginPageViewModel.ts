import {useCallback, useMemo, useRef} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocation, useNavigate} from "react-router";
import UserSupabaseDataSource from "@/data/datasource/supabase/UserSupabaseDataSource.ts";
import {UserRepositoryDataSource} from "@/data/repository/UserRepositoryDataSource.ts";
import {UserSignIn} from "@/domain/usecase/UserSignIn.ts";
import {useLocalStorage} from "usehooks-ts";
import {AuthResponse} from "@supabase/supabase-js";

export default function HomePageViewModel() {
    const [, setValue, ] = useLocalStorage<AuthResponse>('auth', null)
    const navigate = useNavigate()
    const location = useLocation()
    const {toast} = useToast()

    const from = location.state?.from || "/"

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const userDataSource = useMemo(() => new UserSupabaseDataSource(), []);
    const userRepository  = useMemo(() => new UserRepositoryDataSource(userDataSource), [userDataSource]);

    const userSignInUseCase = useMemo(() => new UserSignIn(userDataSource), [userRepository]);

    const userSignIn = useCallback(async (email: string, password: string) => {
        return await userSignInUseCase.invoke(email, password);
    }, [userSignInUseCase]);

    async function handleSubmit() {
        if (!emailRef.current || !passRef.current) {
            toast({
                title: "Login failed!",
                description: `Failed to bind refs!`,
            });
            return;
        }
        if (emailRef.current['value'] == "" || passRef.current['value'] == "") {
            toast({
                title: "Login failed!",
                description: `Please make sure to fill all fields!`,
            });
            return;
        }
        const email: string = emailRef.current['value'];
        const pass: string = passRef.current['value'];

        const res = await userSignIn(email, pass);

        toast({
            title: "Login success!",
            description: `Welcome, ${res.data.user?.email}!`,
        });

        emailRef.current['value'] = "";
        passRef.current['value'] = "";

        setValue(res)

        navigate(from, {replace: true})
    }

    return {
        emailRef,
        passRef,
        handleSubmit
    }
}
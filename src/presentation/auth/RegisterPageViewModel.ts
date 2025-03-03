import {useLocation, useNavigate} from "react-router";
import {useToast} from "@/components/ui/use-toast.ts";
import {useCallback, useMemo, useRef} from "react";
import UserSupabaseDataSource from "@/data/datasource/supabase/UserSupabaseDataSource.ts";
import {UserRepositoryDataSource} from "@/data/repository/UserRepositoryDataSource.ts";
import {UserSignUp} from "@/domain/usecase/UserSignUp.ts";

export default function RegisterPageViewModel() {
    const navigate = useNavigate()
    const location = useLocation()
    const {toast} = useToast()

    const from = location.state?.from || "/"

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const userSupabaseDataSource = useMemo(() => new UserSupabaseDataSource(), []);
    const userRepository = useMemo(() => new UserRepositoryDataSource(userSupabaseDataSource), [userSupabaseDataSource]);

    const userSignUpUseCase = useMemo(() => new UserSignUp(userRepository), [userRepository]);

    const userSignUp = useCallback(async (email: string, password: string) => {
        return await userSignUpUseCase.invoke(email, password);
    }, [userSignUpUseCase])

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

        const res = await userSignUp(email, pass);

        emailRef.current['value'] = "";
        passRef.current['value'] = "";

        navigate(from, {replace: true})
    }

    return {
        emailRef,
        passRef,
        handleSubmit
    }
}
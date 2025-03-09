import {useLocation, useNavigate} from "react-router";
import {useToast} from "@/components/ui/use-toast.ts";
import {useCallback, useMemo, useRef} from "react";
import UserSupabaseDataSource from "@/data/datasource/supabase/UserSupabaseDataSource.ts";
import {UserRepositoryDataSource} from "@/data/repository/UserRepositoryDataSource.ts";
import {UserSignUp} from "@/domain/usecase/UserSignUp.ts";
import {AuthResponse} from "@supabase/supabase-js";

export default function RegisterPageViewModel(register: (email: string, password: string) => Promise<AuthResponse>) {
    const navigate = useNavigate()
    const location = useLocation()
    const {toast} = useToast()

    const from = location.state?.from || "/auth/login"

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

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

        const res = await register(email, pass);

        if(res.error) {
            toast({
                title: "Register failed!",
                description: `${res.error.message}`,
            });
            return;
        } else if(res.data.user == null) {
            toast({
                title: "Register failed!",
                description: `Failed to register user`,
            });
            return;
        }

        toast({
            title: "Register success!",
            description: `Please login, ${res.data.user?.email}!`,
        });

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
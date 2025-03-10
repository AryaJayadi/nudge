import {useRef} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocation, useNavigate} from "react-router";
import {useLocalStorage} from "usehooks-ts";
import {AuthResponse} from "@supabase/supabase-js";

export default function HomePageViewModel(login: (email: string, password: string) => Promise<AuthResponse>) {
    const navigate = useNavigate()
    const location = useLocation()
    const {toast} = useToast()

    const from = location.state?.from || "/"

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

        const res = await login(email, pass);

        if(res.error) {
            toast({
                title: "Login failed!",
                description: `${res.error.message}`,
            });
            return;
        } else if(res.data.user == null) {
            toast({
                title: "Login failed!",
                description: `Failed to find user`,
            });
            return;
        }

        toast({
            title: "Login success!",
            description: `Welcome, ${res.data.user?.email}!`,
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
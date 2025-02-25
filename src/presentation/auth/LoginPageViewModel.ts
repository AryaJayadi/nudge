import {useRef} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {useLocation, useNavigate} from "react-router";

export default function HomePageViewModel() {
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

        //login logic

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
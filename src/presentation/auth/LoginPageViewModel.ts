import {useRef} from "react";
import {useToast} from "@/components/ui/use-toast.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default function HomePageViewModel(login: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>) {
    const {toast} = useToast()

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

        const emailOrPhone: string = emailRef.current['value'];
        const pass: string = passRef.current['value'];

        const res = await login({
            email: emailOrPhone.includes("@") ? emailOrPhone : null,
            phone: emailOrPhone.includes("@") ? null : emailOrPhone,
            password: pass
        });

        if(res.error) {
            toast({
                title: "Login failed!",
                description: `${res.error.message}`,
            });
            return;
        } else if(res.data == null) {
            toast({
                title: "Login failed!",
                description: `Failed to find user`,
            });
            return;
        }

        toast({
            title: "Login success!",
            description: `Welcome, ${res.data?.email}!`,
        });

        emailRef.current['value'] = "";
        passRef.current['value'] = "";
    }

    return {
        emailRef,
        passRef,
        handleSubmit
    }
}
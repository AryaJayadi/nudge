import {useToast} from "@/components/ui/use-toast.ts";
import {useRef} from "react";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default function RegisterPageViewModel(register: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>) {
    const {toast} = useToast()

    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    async function handleSubmit() {
        if (!emailRef.current || !passRef.current || !phoneRef.current) {
            toast({
                title: "Register failed!",
                description: `Failed to bind refs!`,
            });
            return;
        }
        if (emailRef.current['value'] == "" || passRef.current['value'] == "" || phoneRef.current['value'] == "") {
            toast({
                title: "Register failed!",
                description: `Please make sure to fill all fields!`,
            });
            return;
        }
        const email: string = emailRef.current['value'];
        const phone: string = phoneRef.current['value'];
        const pass: string = passRef.current['value'];

        const res = await register({
            email: email,
            phone: phone,
            password: pass
        } as InsertUser);

        if(res.error) {
            toast({
                title: "Register failed!",
                description: `${res.error.message}`,
            });
            return;
        } else if(res.data == null) {
            toast({
                title: "Register failed!",
                description: `Failed to register user`,
            });
            return;
        }

        toast({
            title: "Register success!",
            description: `Please login, ${res.data.email}!`,
        });

        emailRef.current['value'] = "";
        phoneRef.current['value'] = "";
        passRef.current['value'] = "";
    }

    return {
        emailRef,
        phoneRef,
        passRef,
        handleSubmit
    }
}
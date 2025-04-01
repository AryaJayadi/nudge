import {useToast} from "@/components/ui/use-toast.ts";
import {useRef} from "react";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default function ForgotPasswordPageViewModel(updatePassword: (uid: string, data: UpdateUser) => Promise<BaseSupabaseResponse<User>>) {
    const {toast} = useToast()

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    async function handleSubmit() {
        if (!emailRef.current || !passRef.current) {
            toast({
                title: "Forgot Password Failed!",
                description: `Failed to bind refs!`,
            });
            return;
        }
        if (emailRef.current['value'] == "" || passRef.current['value'] == "") {
            toast({
                title: "Forgot Password Failed!",
                description: `Please make sure to fill all fields!`,
            });
            return;
        }

        const emailOrPhone: string = emailRef.current['value'];
        const pass: string = passRef.current['value'];

        const res = await updatePassword(
            emailOrPhone, {
                password: pass
            } as UpdateUser);

        if (res.error) {
            toast({
                title: "Forgot Password Failed!",
                description: `${res.error.message}`,
            });
            return;
        } else if (res.data == null) {
            toast({
                title: "Forgot Password Failed!",
                description: `Failed to find user`,
            });
            return;
        }

        toast({
            title: "Forgot Password success!",
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
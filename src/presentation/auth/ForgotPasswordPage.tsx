import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import {useUser} from "@/presentation/context/UserContext.tsx";
import useViewModel from "./ForgotPasswordPageViewModel.ts";

export const ForgotPasswordPage = () => {
    const {
        updatePassword
    } = useUser();
    const {
        emailRef,
        passRef,
        handleSubmit
    } = useViewModel(updatePassword);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Forgot Password</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Email" ref={emailRef} type="text"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Password" ref={passRef} type="password"/>
                        </div>
                    </div>
                </form>
                <span className="text-sm">Don't have an account? <Link to="/auth/register"
                                                                       className="text-blue-600 underline cursor-pointer">Register now</Link></span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleSubmit}>Login</Button>
            </CardFooter>
        </Card>
    )
}
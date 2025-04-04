import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import useViewModel from "./LoginPageViewModel.ts"
import {Link} from "react-router";
import {useUser} from "@/presentation/context/UserContext.tsx";

export const LoginPage = () => {
    const {
        login
    } = useUser();
    const {
        emailRef,
        passRef,
        handleSubmit
    } = useViewModel(login);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email or Phone</Label>
                            <Input id="email" placeholder="Email or Phone" ref={emailRef} type="text"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Password" ref={passRef} type="password"/>
                        </div>
                    </div>
                </form>
                <span className="text-sm">Don't have an account? <Link to="/auth/register"
                                                                       className="text-blue-600 underline cursor-pointer">Register now</Link></span>
                <span className="text-sm">Forgot your password? <Link to="/auth/forgot-password"
                                                                       className="text-blue-600 underline cursor-pointer">Reset here</Link></span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleSubmit}>Login</Button>
            </CardFooter>
        </Card>
    )
}
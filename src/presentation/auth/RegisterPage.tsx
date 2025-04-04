import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import useViewModel from "./RegisterPageViewModel.ts"
import {Link} from "react-router";
import {useUser} from "@/presentation/context/UserContext.tsx";

export const RegisterPage = () => {
    const {
        register
    } = useUser();
    const {
        emailRef,
        phoneRef,
        passRef,
        handleSubmit
    } = useViewModel(register);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Register</CardTitle>
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
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Phone" ref={phoneRef} type="text"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Password" ref={passRef} type="password"/>
                        </div>
                    </div>
                </form>
                <span className="text-sm">Already have an account? <Link to="/auth/login"
                                                                         className="text-blue-600 underline cursor-pointer">Login now</Link></span>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleSubmit}>Register</Button>
            </CardFooter>
        </Card>
    )
}
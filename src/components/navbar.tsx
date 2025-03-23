import { History } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useUser} from "@/presentation/context/UserContext.tsx";
import {formatCurrency} from "@/lib/utils.ts";
import {Link} from "react-router";

export default function Navbar() {
    const {
        user,
        logout
    } = useUser();

    const userName = user?.email ? user.email.split("@")[0] : "loading...";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-blue-600 text-white">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-lg font-semibold">Nudge Simulation Model</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex">
                        <span className="font-medium">{formatCurrency(user?.balance ?? 0)}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700 hover:text-white" asChild>
                        <Link to="/app/transactions">
                            <History className="h-5 w-5" />
                            <span className="sr-only">Transaction History</span>
                        </Link>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full text-black hover:bg-blue-700">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={userName} />
                                    <AvatarFallback>{user?.email?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">{userName}</p>
                                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                                </div>
                            </DropdownMenuLabel>
                            {/*<DropdownMenuSeparator />*/}
                            {/*<DropdownMenuItem>Profile</DropdownMenuItem>*/}
                            {/*<DropdownMenuItem>Settings</DropdownMenuItem>*/}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="md:hidden">
                        <span className="text-sm font-medium">{formatCurrency(user?.balance ?? 0)}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}


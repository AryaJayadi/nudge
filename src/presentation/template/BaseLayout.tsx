import {Button} from "@/components/ui/button.tsx";
import {Bell} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import BottomNav from "@/components/bottom-nav.tsx";
import {Outlet, useLocation} from "react-router";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {formatCurrency} from "@/lib/utils.ts";


export const BaseLayout = () => {
    const location = useLocation();
    let title = location.pathname.split("/").pop() || "title";
    title = title.charAt(0).toUpperCase() + title.slice(1);
    const {balance} = useUser();

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-lg font-semibold">Nudge Recommendation Model</h1>
                    <div className="flex items-center space-x-2">
                        <span>
                            {formatCurrency(balance)}
                        </span>
                        <Button size="icon" variant="ghost">
                            <Bell className="h-5 w-5"/>
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Budi"/>
                            <AvatarFallback>BD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
            <main className="flex-1 py-6 px-4 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">{title}</h2>
                    <div className="space-y-4 max-w-md mx-auto">
                        <Outlet/>
                    </div>
                </div>
            </main>
            <BottomNav/>
        </div>
    )
}
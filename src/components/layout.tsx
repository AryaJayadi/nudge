import type { ReactNode } from "react"
import BottomNav from "./bottom-nav"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LayoutProps {
    children: ReactNode
    title: string
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-modern-500 text-white p-4 sticky top-0 z-10">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-lg font-semibold">Nudge Recommendation Model</h1>
                    <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Budi" />
                            <AvatarFallback>BD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
            <main className="flex-1 py-6 px-4 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">{title}</h2>
                    {children}
                </div>
            </main>
            <BottomNav />
        </div>
    )
}
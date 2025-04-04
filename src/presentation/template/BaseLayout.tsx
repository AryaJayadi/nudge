import BottomNav from "@/components/bottom-nav.tsx";
import {Outlet, useLocation} from "react-router";
import Navbar from "@/components/navbar.tsx";


export const BaseLayout = () => {
    const location = useLocation();
    let title = location.pathname.split("/").pop() || "title";
    title = title.charAt(0).toUpperCase() + title.slice(1);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-1 py-6 px-4 overflow-y-auto bg-blue-100">
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
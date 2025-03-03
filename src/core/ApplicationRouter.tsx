import {JSX} from "react";
import {createBrowserRouter, Navigate, Outlet, useLocation} from "react-router";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {RootLayout} from "@/presentation/template/RootLayout.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {RouterProvider} from "react-router/dom";
import {BaseLayout} from "@/presentation/template/BaseLayout.tsx";
import {BerandaPage} from "@/presentation/beranda/BerandaPage.tsx";
import {TabunganPage} from "@/presentation/tabungan/TabunganPage.tsx";
import {KreditPage} from "@/presentation/kredit/KreditPage.tsx";
import {InvestasiPage} from "@/presentation/investasi/InvestasiPage.tsx";
import {AsuransiPage} from "@/presentation/asuransi/AsuransiPage.tsx";
import {RegisterPage} from "@/presentation/auth/RegisterPage.tsx";
import {useLocalStorage} from "usehooks-ts";
import {AuthResponse, Session} from "@supabase/supabase-js";

function isAuthenticated(session: Session | null | undefined): boolean {
    if(session === null || session === undefined) return false;

    try {
        const currentTime = Math.floor(Date.now() / 1000);

        return currentTime < session.expires_at;
    } catch (e) {
        console.log(e);
        return false;
    }
}

interface ProtectedRouteProps {
    isAuthenticated: (session: Session | null | undefined) => boolean;
    redirectPath: string;
}

const ProtectedRoute: (p: ProtectedRouteProps) => (JSX.Element) = (p: ProtectedRouteProps) => {
    const [value, , ] = useLocalStorage<AuthResponse>('auth', null)
    const location = useLocation()

    if (!p.isAuthenticated(value?.data.session)) {
        return <Navigate to={p.redirectPath} state={{from: location}}/>
    }

    return <Outlet/>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "",
                element: <ProtectedRoute isAuthenticated={isAuthenticated} redirectPath={"/auth/login"}/>,
                children: [
                    {
                        path: "app",
                        element: <BaseLayout/>,
                        children: [
                            {
                                path: "beranda",
                                element: <BerandaPage/>
                            },
                            {
                                path: "tabungan",
                                element: <TabunganPage/>
                            },
                            {
                                path: "kredit",
                                element: <KreditPage/>
                            },
                            {
                                path: "investasi",
                                element: <InvestasiPage/>
                            },
                            {
                                path: "asuransi",
                                element: <AsuransiPage/>
                            }
                        ]
                    },
                ]
            },
            {
                path: "auth",
                element: <AuthLayout/>,
                children: [
                    {
                        path: "login",
                        element: <LoginPage/>
                    },
                    {
                        path: "register",
                        element: <RegisterPage/>
                    }
                ]
            }
        ]
    }
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};
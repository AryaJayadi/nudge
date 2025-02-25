import {JSX} from "react";
import {createBrowserRouter, Navigate, Outlet, useLocation} from "react-router";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {RootLayout} from "@/presentation/template/RootLayout.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {RouterProvider} from "react-router/dom";
import {BaseLayout} from "@/presentation/template/BaseLayout.tsx";
import {BerandaPage} from "@/presentation/beranda/BerandaPage.tsx";
import {TabunganPage} from "@/presentation/tabungan/TabunganPage.tsx";

function isAuthenticated(): boolean {
    return true;
}

interface ProtectedRouteProps {
    isAuthenticated: () => boolean;
    redirectPath: string;
}

const ProtectedRoute: (p: ProtectedRouteProps) => (JSX.Element) = (p: ProtectedRouteProps) => {
    const location = useLocation()

    if (!p.isAuthenticated()) {
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
                        path: "",
                        element: <BaseLayout/>,
                        children: [
                            {
                                path: "beranda",
                                element: <BerandaPage/>
                            },
                            {
                                path: "tabungan",
                                element: <TabunganPage/>
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
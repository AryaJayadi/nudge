import {JSX} from "react";
import {createBrowserRouter, Navigate, Outlet, useLocation} from "react-router";
import {AuthLayout} from "@/presentation/template/AuthLayout.tsx";
import {RootLayout} from "@/presentation/template/RootLayout.tsx";
import {LoginPage} from "@/presentation/auth/LoginPage.tsx";
import {RouterProvider} from "react-router/dom";
import {BaseLayout} from "@/presentation/template/BaseLayout.tsx";
import {BerandaPage} from "@/presentation/beranda/BerandaPage.tsx";
import {TabunganPage} from "@/presentation/product/TabunganPage.tsx";
import {KreditPage} from "@/presentation/product/KreditPage.tsx";
import {InvestasiPage} from "@/presentation/product/InvestasiPage.tsx";
import {AsuransiPage} from "@/presentation/product/AsuransiPage.tsx";
import {RegisterPage} from "@/presentation/auth/RegisterPage.tsx";
import {useLocalStorage} from "usehooks-ts";
import {QuestionnairePage} from "@/presentation/questionnaire/QuestionnairePage.tsx";
import {UserProvider} from "@/presentation/context/UserContext.tsx";
import {ConsentPage} from "@/presentation/consent/ConsentPage.tsx";

interface ProtectedRouteProps {
    redirectPath: string;
}

const ProtectedRoute: (p: ProtectedRouteProps) => (JSX.Element) = (p: ProtectedRouteProps) => {
    const [value, , ] = useLocalStorage<User | null>('auth', null)
    const location = useLocation()

    if (!value) {
        return <Navigate to={p.redirectPath} state={{from: location}}/>
    }

    return <Outlet/>
}

const Root = () => {
    return (
        <UserProvider>
            <RootLayout/>
        </UserProvider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Navigate to="/app/beranda" replace />
            },
            {
                path: "",
                element: <ProtectedRoute redirectPath={"/auth/login"}/>,
                children: [
                    {
                        path: "consent",
                        element: <ConsentPage />
                    },
                    {
                        path: "questionnaire",
                        element: <QuestionnairePage />
                    },
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
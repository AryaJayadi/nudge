import {ApplicationRouter} from "@/core/ApplicationRouter.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {UserProvider} from "@/presentation/context/UserContext.tsx";


function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <UserProvider>
                <ApplicationRouter/>
                <Toaster/>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;

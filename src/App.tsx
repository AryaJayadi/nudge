import {ApplicationRouter} from "@/core/ApplicationRouter.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";


function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ApplicationRouter/>
            <Toaster/>
        </ThemeProvider>
    );
}

export default App;

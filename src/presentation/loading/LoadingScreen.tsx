import {useLoading} from "@/presentation/context/LoadingContext.tsx";
import {Loader2} from "lucide-react";

export const LoadingScreen = () => {
    const { isLoading, message } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <p className="text-center text-muted-foreground">{message}</p>
            </div>
        </div>
    );
};
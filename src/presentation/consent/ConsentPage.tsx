import ConsentModal from "@/components/consent-modal.tsx";
import {useUser} from "@/presentation/context/UserContext.tsx";

export const ConsentPage = () => {
    const {
        onConsent
    } = useUser();

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-gray-600">
            <div className="w-full max-w-4xl">
                <ConsentModal onConsent={onConsent}/>
            </div>
        </main>
    )
}
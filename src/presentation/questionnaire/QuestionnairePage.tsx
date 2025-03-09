import { useState } from "react"
import "@/styles/globals.css"
import ConsentModal from "@/components/consent-modal"
import Questionnaire from "@/components/questionnaire"
import useViewModel from "./QuestionnairePageViewModel.tsx"

export const QuestionnairePage = () => {
    const {
        loading,
        questions
    } = useViewModel();
    const [hasConsented, setHasConsented] = useState(false)

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <div className="w-full max-w-4xl">
                {!hasConsented ? <ConsentModal onConsent={() => setHasConsented(true)} /> : <Questionnaire />}
            </div>
        </main>
    )
}


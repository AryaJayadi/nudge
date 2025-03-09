import {useState} from "react"
import "@/styles/globals.css"
import ConsentModal from "@/components/consent-modal"
import Questionnaire from "@/components/questionnaire"
import {QuestionnaireProvider, useQuestionnaire} from "@/presentation/context/QuestionnaireContext.tsx";
import useViewModel from "./QuestionnairePageViewModel.tsx"

export const QuestionnairePage = () => {
    // const {
    //     loading,
    //     questions,
    //     responses,
    //     handleAnswerChange
    // } = useQuestionnaire();
    const {
        loading,
        questions,
        responses,
        handleAnswerChange
    } = useViewModel();
    const [hasConsented, setHasConsented] = useState(false)

    return (
        <QuestionnaireProvider>
            <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <div className="w-full max-w-4xl">
                    {!hasConsented ? <ConsentModal onConsent={() => setHasConsented(true)}/> :
                        loading ? <div>Loading...</div> :
                        <Questionnaire questions={questions} responses={responses} handleAnswerChange={handleAnswerChange}/>}
                </div>
            </main>
        </QuestionnaireProvider>
    )
}


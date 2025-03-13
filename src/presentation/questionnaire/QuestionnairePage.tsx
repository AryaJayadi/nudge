import "@/styles/globals.css"
import Questionnaire from "@/components/questionnaire"
import {QuestionnaireProvider} from "@/presentation/context/QuestionnaireContext.tsx";

export const QuestionnairePage = () => {

    return (
        <QuestionnaireProvider>
            <main className="min-h-screen flex items-center justify-center p-4 bg-gray-600">
                <div className="w-full max-w-4xl">
                    <Questionnaire/>
                </div>
            </main>
        </QuestionnaireProvider>
    )
}


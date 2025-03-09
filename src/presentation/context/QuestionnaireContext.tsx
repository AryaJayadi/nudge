import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import QuestionSupabaseDataSource from "@/data/datasource/supabase/QuestionSupabaseDataSource.ts";
import {QuestionRepositoryDataSource} from "@/data/repository/QuestionRepositoryDataSource.ts";
import QuestionGetAll from "@/domain/usecase/QuestionGetAll.ts";
import {Question} from "@/domain/model/Question.ts";

interface QuestionnaireContextType {
    loading: boolean;
    questions: Question[];
}

const QuestionnaireContext = createContext<QuestionnaireContextType>({
    loading: true,
    questions: [],
})

export function QuestionnaireProvider({children}: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean>(true)
    const [questions, setQuestions] = useState<Question[]>([])

    const questionDataSource = useMemo(() => new QuestionSupabaseDataSource(), []);
    const questionRepository = useMemo(() => new QuestionRepositoryDataSource(questionDataSource), [questionDataSource]);

    const questionGetAllUseCase = useMemo(() => new QuestionGetAll(questionRepository), [questionRepository]);

    const getAllQuestions = useCallback(async () => {
        return await questionGetAllUseCase.invoke();
    }, [questionGetAllUseCase]);

    useEffect(() => {
        if(loading) {
            getAllQuestions().then(res => {
                setQuestions(res);
                setLoading(false);
            });
        }
    }, [loading]);

    return (
        <QuestionnaireContext.Provider value={{loading, questions}}>
            {children}
        </QuestionnaireContext.Provider>
    );
}

export function useQuestionnaire() {
    const context = useContext(QuestionnaireContext);
    if (!context) {
        throw new Error("useQuestionnaire must be used within a QuestionProvider");
    }
    return context;
}
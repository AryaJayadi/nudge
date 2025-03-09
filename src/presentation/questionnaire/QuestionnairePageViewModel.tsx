import {useCallback, useEffect, useMemo, useState} from "react";
import {Question} from "@/domain/model/Question.ts";
import QuestionSupabaseDataSource from "@/data/datasource/supabase/QuestionSupabaseDataSource.ts";
import {QuestionRepositoryDataSource} from "@/data/repository/QuestionRepositoryDataSource.ts";
import QuestionGetAll from "@/domain/usecase/QuestionGetAll.ts";

export default function QuestionnairePageViewModel() {
    const [loading, setLoading] = useState<boolean>(true)
    const [questions, setQuestions] = useState<Question[]>()

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

    return {
        loading,
        questions
    }
}
import {useUser} from "@/presentation/context/UserContext.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Question} from "@/domain/model/Question.ts";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import QuestionSupabaseDataSource from "@/data/datasource/supabase/QuestionSupabaseDataSource.ts";
import {QuestionRepositoryDataSource} from "@/data/repository/QuestionRepositoryDataSource.ts";
import QuestionGetAll from "@/domain/usecase/QuestionGetAll.ts";
import {QuestionType} from "@/domain/model/enum/QuestionType.ts";

export default function QuestionnairePageViewModel() {
    const {
        user
    } = useUser();
    const [loading, setLoading] = useState<boolean>(true)
    const [questions, setQuestions] = useState<Question[]>([])
    const [responses, setResponses] = useState<InsertUserResponseSupabase[]>([])

    const questionDataSource = useMemo(() => new QuestionSupabaseDataSource(), []);
    const questionRepository = useMemo(() => new QuestionRepositoryDataSource(questionDataSource), [questionDataSource]);

    const questionGetAllUseCase = useMemo(() => new QuestionGetAll(questionRepository), [questionRepository]);

    const getAllQuestions = useCallback(async () => {
        return await questionGetAllUseCase.invoke();
    }, [questionGetAllUseCase]);

    useEffect(() => {
        if (loading) {
            getAllQuestions().then(res => {
                setQuestions(res);
                setLoading(false);
            });
        }
    }, [loading]);

    function handleAnswerChange(question: Question, answer: string) {
        setResponses(prev => {
            let updatedResponses = prev.map(o => ({ ...o })); // Create a shallow copy

            let currIndex = updatedResponses.findIndex(o => o.question_id === question.id);

            if (currIndex !== -1) {
                let curr = updatedResponses[currIndex];

                if (question.question_type === QuestionType.MULTI) {
                    curr.response = curr.response.includes(answer)
                        ? curr.response.filter(o => o !== answer) // Remove answer
                        : [...curr.response, answer]; // Add answer
                } else if (question.question_type === QuestionType.SINGLE) {
                    curr.response = [answer]; // Replace with single answer
                }

                updatedResponses[currIndex] = { ...curr }; // Ensure immutability
            } else {
                updatedResponses = [
                    ...updatedResponses,
                    {
                        user_id: user?.id,
                        question_id: question.id,
                        response: [answer]
                    } as InsertUserResponseSupabase
                ];
            }

            return updatedResponses;
        });
    }

    return {
        loading,
        questions,
        responses,
        handleAnswerChange
    }
}
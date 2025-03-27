import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import QuestionSupabaseDataSource from "@/data/datasource/supabase/QuestionSupabaseDataSource.ts";
import {QuestionRepositoryDataSource} from "@/data/repository/QuestionRepositoryDataSource.ts";
import QuestionGetAll from "@/domain/usecase/QuestionGetAll.ts";
import {Question} from "@/domain/model/Question.ts";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {QuestionType} from "@/domain/model/enum/QuestionType.ts";
import QuestionInsertResponses from "@/domain/usecase/QuestionInsertResponses.ts";

type ResponseLainnya = {
    question_id: string;
    type: QuestionType;
    response: string;
}

interface QuestionnaireContextType {
    loading: boolean;
    questions: Question[];
    responses: InsertUserResponseSupabase[];
    lResponses: ResponseLainnya[];
    handleAnswerChange: (question: Question, answer: string) => void;
    handleLainnyaChange: (question: Question, answer: string) => void;
    submitAnswer: (callback: () => void) => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextType>({
    loading: true,
    questions: [],
    responses: [],
    lResponses: [],
    handleAnswerChange: () => {},
    handleLainnyaChange: () => {},
    submitAnswer: () => {},
})

export function QuestionnaireProvider({children}: { children: ReactNode }) {
    const {
        user
    } = useUser();
    const [loading, setLoading] = useState<boolean>(true)
    const [questions, setQuestions] = useState<Question[]>([])
    const [responses, setResponses] = useState<InsertUserResponseSupabase[]>([])
    const [lResponses, setLResponses] = useState<ResponseLainnya[]>([])

    const questionDataSource = useMemo(() => new QuestionSupabaseDataSource(), []);
    const questionRepository = useMemo(() => new QuestionRepositoryDataSource(questionDataSource), [questionDataSource]);

    const questionGetAllUseCase = useMemo(() => new QuestionGetAll(questionRepository), [questionRepository]);
    const getAllQuestions = useCallback(async () => {
        return await questionGetAllUseCase.invoke();
    }, [questionGetAllUseCase]);

    const questionInsertUserResponsesUseCase = useMemo(() => new QuestionInsertResponses(questionRepository), [questionRepository]);
    const insertResponses = useCallback(async (data: InsertUserResponseSupabase[]) => {
        return await questionInsertUserResponsesUseCase.invoke(data);
    }, [questionInsertUserResponsesUseCase]);

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

    function handleLainnyaChange(question: Question, answer: string) {
        setLResponses(prev => {
            let updatedResponses = prev.map(o => ({ ...o }));
            let currIndex = updatedResponses.findIndex(o => o.question_id === question.id);

            if (currIndex !== -1) {
                let curr = updatedResponses[currIndex];
                curr.response = answer;
                updatedResponses[currIndex] = { ...curr }; // Ensure immutability
            } else {
                updatedResponses = [
                    ...updatedResponses,
                    {
                        question_id: question.id,
                        type: question.question_type,
                        response: answer
                    } as ResponseLainnya
                ];
            }

            return updatedResponses;
        })
    }

    async function submitAnswer(callback: () => void) {
        lResponses.forEach(o => {
            setResponses(prev => {
                let updatedResponses = prev.map(p => ({ ...p }));
                let currIndex = updatedResponses.findIndex(p => p.question_id === o.question_id);

                console.log(currIndex);

                if (currIndex !== -1) {
                    let curr = updatedResponses[currIndex];

                    if (o.type === QuestionType.MULTI) {
                        let targetIndex = curr.response.findIndex(p => p.toLowerCase().includes("lainnya"));

                        if(targetIndex !== -1) {
                            curr.response[targetIndex] = o.response;
                            console.log(curr)
                        }
                    } else if (o.type === QuestionType.SINGLE) {
                        curr.response = [o.response];
                        console.log(curr);
                    }

                    updatedResponses[currIndex] = { ...curr };
                }

                console.log(updatedResponses);
                return updatedResponses;
            });
        });

        insertResponses(responses).then(() => callback());

        console.log(responses);
        console.log(lResponses);
    }

    return (
        <QuestionnaireContext.Provider value={{loading, questions, responses, lResponses, handleAnswerChange, handleLainnyaChange, submitAnswer}}>
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
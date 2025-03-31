import {useCallback, useMemo, useState} from "react";
import {useNavigate} from "react-router";
import {FeedbackQuestionSupabaseDataSource} from "@/data/datasource/supabase/FeedbackQuestionSupabaseDataSource.ts";
import {FeedbackQuestionDataSourceRepository} from "@/data/repository/FeedbackQuestionDataSourceRepository.ts";
import {FeedbackQuestionRead} from "@/domain/usecase/feedback_question/FeedbackQuestionRead.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {FeedbackResponseSupabaseDataSource} from "@/data/datasource/supabase/FeedbackResponseSupabaseDataSource.ts";
import {FeedbackResponseDataSourceRepository} from "@/data/repository/FeedbackResponseDataSourceRepository.ts";
import {FeedbackResponseCreate} from "@/domain/usecase/feedback_response/FeedbackResponseCreate.ts";

export default function FeedbackPageViewModel() {
    const [responses, setResponses] = useState<InsertFeedbackResponse[]>([]);
    const navigate = useNavigate();
    const {user} = useUser();

    const feedbackQuestionDataSource = useMemo(() => new FeedbackQuestionSupabaseDataSource(), []);
    const feedbackQuestionRepository = useMemo(() => new FeedbackQuestionDataSourceRepository(feedbackQuestionDataSource), [feedbackQuestionDataSource]);

    const feedbackResponseDataSource = useMemo(() => new FeedbackResponseSupabaseDataSource(), []);
    const feedbackResponseRepository = useMemo(() => new FeedbackResponseDataSourceRepository(feedbackResponseDataSource), [feedbackResponseDataSource]);

    const feedbackQuestionReadUseCase = useMemo(() => new FeedbackQuestionRead(feedbackQuestionRepository), [feedbackQuestionRepository]);
    const feedbackQuestionRead = useCallback(async () => {
        return await feedbackQuestionReadUseCase.invoke();
    }, [feedbackQuestionReadUseCase]);
    const {
        data: questionsData,
        error: questionsError,
        loading: questionsLoading
    } = useSupabaseQuery(feedbackQuestionRead);

    const feedbackResponseCreateUseCase = useMemo(() => new FeedbackResponseCreate(feedbackResponseRepository), [feedbackResponseRepository]);
    const feedbackResponseCreate = useCallback(async (data: InsertFeedbackResponse[]) => {
        return await feedbackResponseCreateUseCase.invoke(data);
    }, [feedbackResponseCreateUseCase]);

    const handleRatingChange = (id: number, score: number) => {
        setResponses((prev) => {
            let updatedResponse = prev.map(o => ({...o}));
            let currIndex = updatedResponse.findIndex(o => o.id === id)

            if (currIndex !== -1) {
                let curr = updatedResponse[currIndex];
                curr.score = score;
            } else {
                updatedResponse = [
                    ...updatedResponse, {
                        nudge_user_id: user?.id,
                        nudge_feedback_question_id: id,
                        score: score
                    } as InsertFeedbackResponse
                ];
            }

            return updatedResponse;
        })
    }

    const handleSubmit = () => {
        // Here you would typically send the feedback data to your backend
        console.log("Feedback submitted:", responses)

        feedbackResponseCreate(responses);

        // Redirect to a thank you page or back to the home page
        navigate("/app/thankyou")
    }

    const isComplete = Object.keys(responses).length === questionsData?.length

    return {
        questionsData,
        questionsLoading,
        questionsError,
        responses,
        handleRatingChange,
        handleSubmit,
        isComplete
    }
}
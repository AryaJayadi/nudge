import {useCallback, useMemo, useState} from "react";
import {useNavigate} from "react-router";
import {FeedbackQuestionSupabaseDataSource} from "@/data/datasource/supabase/FeedbackQuestionSupabaseDataSource.ts";
import {FeedbackQuestionDataSourceRepository} from "@/data/repository/FeedbackQuestionDataSourceRepository.ts";
import {FeedbackQuestionRead} from "@/domain/usecase/feedback_question/FeedbackQuestionRead.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";

export default function FeedbackPageViewModel() {
    const [ratings, setRatings] = useState<Record<string, string>>({});
    const navigate = useNavigate();

    const feedbackQuestionDataSource = useMemo(() => new FeedbackQuestionSupabaseDataSource(), []);
    const feedbackQuestionRepository = useMemo(() => new FeedbackQuestionDataSourceRepository(feedbackQuestionDataSource), [feedbackQuestionDataSource]);

    const feedbackQuestionReadUseCase = useMemo(() => new FeedbackQuestionRead(feedbackQuestionRepository), [feedbackQuestionRepository]);
    const feedbackQuestionRead = useCallback(async () => {
        return await feedbackQuestionReadUseCase.invoke();
    }, [feedbackQuestionReadUseCase]);
    const {
        data: questionsData,
        error: questionsError,
        loading: questionsLoading
    } = useSupabaseQuery(feedbackQuestionRead)

    const handleRatingChange = (questionId: string, value: string) => {
        setRatings((prev) => ({
            ...prev,
            [questionId]: value,
        }))
    }

    const handleSubmit = () => {
        // Here you would typically send the feedback data to your backend
        console.log("Feedback submitted:", ratings)

        // Redirect to a thank you page or back to the home page
        navigate("/app/thankyou")
    }

    const isComplete = Object.keys(ratings).length === questions.length

    return {
        questionsData,
        questionsLoading,
        questionsError,
        ratings,
        handleRatingChange,
        handleSubmit,
        isComplete
    }
}
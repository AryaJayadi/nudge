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
import {FinishSimulationSupabaseDataSource} from "@/data/datasource/supabase/FinishSimulationSupabaseDataSource.ts";
import {FinishSimulationRepositoryDataSource} from "@/data/repository/FinishSimulationRepositoryDataSource.ts";
import {FinishSimulationCreate} from "@/domain/usecase/finish_simulation/FinishSimulationCreate.ts";
import {FinishSimulation} from "@/domain/usecase/finish_simulation/FinishSimulation.ts";

export default function FeedbackPageViewModel() {
    const [responses, setResponses] = useState<InsertFeedbackResponse[]>([]);
    const navigate = useNavigate();
    const {user} = useUser();

    const feedbackQuestionDataSource = useMemo(() => new FeedbackQuestionSupabaseDataSource(), []);
    const feedbackQuestionRepository = useMemo(() => new FeedbackQuestionDataSourceRepository(feedbackQuestionDataSource), [feedbackQuestionDataSource]);

    const feedbackResponseDataSource = useMemo(() => new FeedbackResponseSupabaseDataSource(), []);
    const feedbackResponseRepository = useMemo(() => new FeedbackResponseDataSourceRepository(feedbackResponseDataSource), [feedbackResponseDataSource]);

    const finishSimulationDataSource = useMemo(() => new FinishSimulationSupabaseDataSource(), []);
    const finishSimulationRepository = useMemo(() => new FinishSimulationRepositoryDataSource(finishSimulationDataSource), [finishSimulationDataSource]);

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

    const finishSimulationCreateUseCase = useMemo(() => new FinishSimulationCreate(finishSimulationRepository), [finishSimulationRepository]);
    const finishSimulationCreate = useCallback(async (data: InsertFinishSimulation) => {
        return await finishSimulationCreateUseCase.invoke(data);
    }, [finishSimulationCreateUseCase]);

    const finishSimulationUseCase = useMemo(() => new FinishSimulation(finishSimulationRepository, feedbackResponseRepository), [finishSimulationRepository, feedbackResponseRepository])
    const finishSimulation = useCallback(async (uid: string, data: InsertFeedbackResponse[]) => {
        return await finishSimulationUseCase.invoke(uid, data);
    }, [finishSimulationUseCase]);

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
        if(!user || !user.id) return

        console.log("Feedback submitted:", responses)

        finishSimulation(user.id, responses).then((res) => {
            if(res.error) {
                return
            }

            navigate("/app/thankyou")
        })
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
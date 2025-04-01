import {useCallback, useMemo, useRef, useState} from "react";
import {useNavigate} from "react-router";
import {FeedbackQuestionSupabaseDataSource} from "@/data/datasource/supabase/FeedbackQuestionSupabaseDataSource.ts";
import {FeedbackQuestionDataSourceRepository} from "@/data/repository/FeedbackQuestionDataSourceRepository.ts";
import {FeedbackQuestionRead} from "@/domain/usecase/feedback_question/FeedbackQuestionRead.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {FeedbackResponseSupabaseDataSource} from "@/data/datasource/supabase/FeedbackResponseSupabaseDataSource.ts";
import {FeedbackResponseDataSourceRepository} from "@/data/repository/FeedbackResponseDataSourceRepository.ts";
import {FinishSimulationSupabaseDataSource} from "@/data/datasource/supabase/FinishSimulationSupabaseDataSource.ts";
import {FinishSimulationRepositoryDataSource} from "@/data/repository/FinishSimulationRepositoryDataSource.ts";
import {FinishSimulation} from "@/domain/usecase/finish_simulation/FinishSimulation.ts";
import {UserRewardSupabaseDataSource} from "@/data/datasource/supabase/UserRewardSupabaseDataSource.ts";
import {UserRewardRepositoryDataSource} from "@/data/repository/UserRewardRepositoryDataSource.ts";
import {UserRewardCreate} from "@/domain/usecase/user_reward/UserRewardCreate.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {calcPrize} from "@/lib/utils.ts";

export default function FeedbackPageViewModel() {
    const [responses, setResponses] = useState<InsertFeedbackResponse[]>([]);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const {toast} = useToast();
    const {user} = useUser();

    const THANKYOU = "/thankyou";

    const feedbackQuestionDataSource = useMemo(() => new FeedbackQuestionSupabaseDataSource(), []);
    const feedbackQuestionRepository = useMemo(() => new FeedbackQuestionDataSourceRepository(feedbackQuestionDataSource), [feedbackQuestionDataSource]);

    const feedbackResponseDataSource = useMemo(() => new FeedbackResponseSupabaseDataSource(), []);
    const feedbackResponseRepository = useMemo(() => new FeedbackResponseDataSourceRepository(feedbackResponseDataSource), [feedbackResponseDataSource]);

    const finishSimulationDataSource = useMemo(() => new FinishSimulationSupabaseDataSource(), []);
    const finishSimulationRepository = useMemo(() => new FinishSimulationRepositoryDataSource(finishSimulationDataSource), [finishSimulationDataSource]);

    const userRewardDataSource = useMemo(() => new UserRewardSupabaseDataSource(), []);
    const userRewardRepository = useMemo(() => new UserRewardRepositoryDataSource(userRewardDataSource), [userRewardDataSource]);

    const feedbackQuestionReadUseCase = useMemo(() => new FeedbackQuestionRead(feedbackQuestionRepository), [feedbackQuestionRepository]);
    const feedbackQuestionRead = useCallback(async () => {
        return await feedbackQuestionReadUseCase.invoke();
    }, [feedbackQuestionReadUseCase]);
    const {
        data: questionsData,
        error: questionsError,
        loading: questionsLoading
    } = useSupabaseQuery(feedbackQuestionRead);

    const finishSimulationUseCase = useMemo(() => new FinishSimulation(finishSimulationRepository, feedbackResponseRepository), [finishSimulationRepository, feedbackResponseRepository])
    const finishSimulation = useCallback(async (uid: string, data: InsertFeedbackResponse[]) => {
        return await finishSimulationUseCase.invoke(uid, data);
    }, [finishSimulationUseCase]);

    const userRewardCreateUseCase = useMemo(() => new UserRewardCreate(userRewardRepository), [userRewardRepository]);
    const userRewardCreate = useCallback(async (data: InsertUserReward) => {
        return await userRewardCreateUseCase.invoke(data);
    }, [userRewardCreateUseCase]);

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
        if(!phoneRef.current || phoneRef.current['value'] == "") {
            toast({
                title: "Feedback failed!",
                description: `Please fill phone number for reward!`,
            });
            return;
        }

        const phone: string = phoneRef.current['value'];

        console.log("Feedback submitted:", responses)

        finishSimulation(user.id, responses).then((res) => {
            if(res.error) {
                return
            }

            userRewardCreate({
                nudge_user_id: user.id,
                reward_phone: phone,
                reward: calcPrize(user.balance)
            } as InsertUserReward).then(res2 => {
                if(res2.error) return;

                navigate(THANKYOU, {replace: true});
            });
        })
    }

    const isComplete = Object.keys(responses).length === questionsData?.length

    return {
        questionsData,
        questionsLoading,
        questionsError,
        responses,
        phoneRef,
        handleRatingChange,
        handleSubmit,
        isComplete
    }
}
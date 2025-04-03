import {useCallback, useEffect, useMemo, useRef, useState} from "react";
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
import {useLoading} from "@/presentation/context/LoadingContext.tsx";

export default function FeedbackPageViewModel() {
    const [responses, setResponses] = useState<InsertFeedbackResponse[]>([]);
    const lainnyaRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const {toast} = useToast();
    const {user} = useUser();
    const { setLoading, setMessage } = useLoading();

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

    useEffect(() => {
        console.log(responses);
    }, [responses]);

    const handleRatingChange = (id: number, score: number) => {
        setResponses((prev) => {
            let updatedResponse = prev.map(o => ({...o}));
            const currIndex = updatedResponse.findIndex(o => o.nudge_feedback_question_id === id)

            if (currIndex !== -1) {
                const curr = updatedResponse[currIndex];
                curr.response = score.toString();
            } else {
                updatedResponse = [
                    ...updatedResponse, {
                        nudge_user_id: user?.id,
                        nudge_feedback_question_id: id,
                        response: score.toString()
                    } as InsertFeedbackResponse
                ];
            }

            return updatedResponse;
        })
    }

    const handleSubmit = () => {
        if(!user || !user.id) return
        if(!phoneRef.current || !lainnyaRef.current || phoneRef.current['value'] == "" || lainnyaRef.current['value'] == "") {
            toast({
                title: "Feedback failed!",
                description: `Please fill phone number for reward!`,
            });
            return;
        }

        setMessage('Processing Feedback...');
        setLoading(true);

        const phone: string = phoneRef.current['value'];
        const lainnya: string = lainnyaRef.current['value'];

        const data = [
            ...responses, {
                nudge_user_id: user.id,
                nudge_feedback_question_id: 6,
                response: lainnya
            } as InsertFeedbackResponse
        ];

        console.log("Feedback submitted:", responses)

        setMessage('Submitting Feedback...');

        finishSimulation(user.id, data).then((res) => {
            if(res.error) {
                setLoading(false);
                return
            }

            setMessage("Calculating Reward...");

            userRewardCreate({
                nudge_user_id: user.id,
                reward_phone: phone,
                reward: calcPrize(user.balance)
            } as InsertUserReward).then(res2 => {
                if(res2.error) {
                    setLoading(false);
                    return;
                }

                setLoading(false);

                navigate(THANKYOU, {replace: true});
            });
        })
    }

    const len = questionsData?.length ?? 0;
    const isComplete = Object.keys(responses).length === len - 1

    return {
        questionsData,
        questionsLoading,
        questionsError,
        responses,
        phoneRef,
        lainnyaRef,
        handleRatingChange,
        handleSubmit,
        isComplete
    }
}
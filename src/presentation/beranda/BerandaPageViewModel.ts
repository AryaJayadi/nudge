import {useCallback, useEffect, useMemo, useState} from "react";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {PostgrestError} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserTransactionSupabaseDataSource} from "@/data/datasource/supabase/UserTransactionSupabaseDataSource.ts";
import {UserTransactionRepositoryDataSource} from "@/data/repository/UserTransactionRepositoryDataSource.ts";
import {UserTransactionReadByUser} from "@/domain/usecase/user_transaction/UserTransactionReadByUser.ts";
import {useNavigate} from "react-router";
import {RecommendationJoheDataSource} from "@/data/datasource/johe/RecommendationJoheDataSource.ts";
import {RecommendationRepositoryDataSource} from "@/data/repository/RecommendationRepositoryDataSource.ts";
import {RecommendationRead} from "@/domain/usecase/recommendation/RecommendationRead.ts";

export default function BerandaPageViewModel() {
    const {
        user
    } = useUser();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<UserTransactionWithDetails[]>([]);
    const [recommendations, setRecommendations] = useState<string[]>([]);
    const navigate = useNavigate();

    const FEEDBACK = "/feedback";

    const userTransactionDataSource = useMemo(() => new UserTransactionSupabaseDataSource(), []);
    const userTransactionRepository = useMemo(() => new UserTransactionRepositoryDataSource(userTransactionDataSource), [userTransactionDataSource]);

    const recommendationDataSource = useMemo(() => new RecommendationJoheDataSource(), []);
    const recommendationRepository = useMemo(() => new RecommendationRepositoryDataSource(recommendationDataSource), [recommendationDataSource]);

    const userTransactionReadByUserUseCase = useMemo(() => new UserTransactionReadByUser(userTransactionRepository), [userTransactionRepository]);
    const userTransactionReadByUser = useCallback(async () => {
        if (user === null) {
            return {
                success: false,
                data: null,
                error: {message: "User is not logged in", details: "", hint: "", code: ""} as PostgrestError
            } as BaseSupabaseResponse<UserTransactionWithDetails[]>;
        }
        return await userTransactionReadByUserUseCase.invoke(user.id);
    }, [userTransactionReadByUserUseCase, user]);

    const recommendationReadUseCase = useMemo(() => new RecommendationRead(recommendationRepository), [recommendationRepository]);
    const recommendationRead = useCallback(async () => {
        if (user === null) {
            let res: string[] = [];
            return res;
        }
        return recommendationReadUseCase.invoke(user.id);
    }, [recommendationReadUseCase, user]);

    useEffect(() => {
        if (user) {
            userTransactionReadByUser()
                .then((res) => {
                    if(res.data !== null) setTransactions(res.data)
                });
            recommendationRead()
                .then((res) => {
                    setRecommendations(res);
                })
        }
    }, [user]);

    function handleFinish() {
        navigate(FEEDBACK, {replace: true});
    }

    return {
        transactions,
        showModal,
        setShowModal,
        handleFinish
    }
}
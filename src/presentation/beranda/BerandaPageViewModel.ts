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
import {CardCarouselSupabaseDataSource} from "@/data/datasource/supabase/CardCarouselSupabaseDataSource.ts";
import {CardCarouselRepositoryDataSource} from "@/data/repository/CardCarouselRepositoryDataSource.ts";
import {CardCarouselRead} from "@/domain/usecase/card_carousel/CardCarouselRead.ts";
import {CardInteractionSupabaseDataSource} from "@/data/datasource/supabase/CardInteractionSupabaseDataSource.ts";
import {CardInteractionRepositoryDataSource} from "@/data/repository/CardInteractionRepositoryDataSource.ts";
import {CardInteractionCreate} from "@/domain/usecase/card_interaction/CardInteractionCreate.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {formatCurrency} from "@/lib/utils.ts";

export default function BerandaPageViewModel() {
    const {
        user,
        incBalance
    } = useUser();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<UserTransactionWithDetails[]>([]);
    const [recommendations, setRecommendations] = useState<string[]>([]);
    const [cards, setCards] = useState<CardCarousel[]>([]);
    const navigate = useNavigate();
    const {toast} = useToast();

    const FEEDBACK = "/feedback";
    const TABUNGAN = "/app/tabungan"
    const KREDIT = "/app/kredit"
    const INVESTASI = "/app/investasi"
    const ASURANSI = "/app/asuransi"

    const userTransactionDataSource = useMemo(() => new UserTransactionSupabaseDataSource(), []);
    const userTransactionRepository = useMemo(() => new UserTransactionRepositoryDataSource(userTransactionDataSource), [userTransactionDataSource]);

    const recommendationDataSource = useMemo(() => new RecommendationJoheDataSource(), []);
    const recommendationRepository = useMemo(() => new RecommendationRepositoryDataSource(recommendationDataSource), [recommendationDataSource]);

    const cardCarouselDataSource = useMemo(() => new CardCarouselSupabaseDataSource(), []);
    const cardCarouselRepository = useMemo(() => new CardCarouselRepositoryDataSource(cardCarouselDataSource), [cardCarouselDataSource]);

    const cardInteractionDataSource = useMemo(() => new CardInteractionSupabaseDataSource(), []);
    const cardInteractionRepository = useMemo(() => new CardInteractionRepositoryDataSource(cardInteractionDataSource),[cardInteractionDataSource]);

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

    const cardCarouselReadUseCase = useMemo(() => new CardCarouselRead(cardCarouselRepository), [cardCarouselRepository]);
    const cardCarouselRead = useCallback(async () => {
        return await cardCarouselReadUseCase.invoke();
    }, [cardCarouselReadUseCase]);

    const cardInteractionCreateUseCase = useMemo(() => new CardInteractionCreate(cardInteractionRepository),[cardInteractionRepository]);
    const cardInteractionCreate = useCallback(async (data: InsertCardInteraction) => {
        return await cardInteractionCreateUseCase.invoke(data);
    }, [cardInteractionCreateUseCase]);

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

    useEffect(() => {
        cardCarouselRead().then(res => {
            if(res.data) {
                setCards(res.data);
            }
        })
    }, []);

    function handleFinish() {
        navigate(FEEDBACK, {replace: true});
    }

    function handleCardClick(card: CardCarousel) {
        if(!user) return;

        const res = user.balance * card.weight;
        incBalance(res);

        toast({
            title: "Promo berhasil ditambahkan! 🎉",
        });

        cardInteractionCreate({
            nudge_user_id: user.id,
            nudge_card_carousel_id: card.id
        } as InsertCardInteraction)

        if(card.nudge_category_id === RecordCategory.SAVING) {
            navigate(TABUNGAN, {replace: true});
        } else if (card.nudge_category_id === RecordCategory.LOAN) {
            navigate(KREDIT, {replace: true});
        } else if (card.nudge_category_id === RecordCategory.INVESTMENT) {
            navigate(INVESTASI, {replace: true});
        } else if (card.nudge_category_id === RecordCategory.INSURANCE) {
            navigate(ASURANSI, {replace: true});
        }
    }

    return {
        transactions,
        recommendations,
        cards,
        showModal,
        setShowModal,
        handleFinish,
        handleCardClick
    }
}
import {useCallback, useMemo} from "react";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {ProductSupabaseDataSource} from "@/data/datasource/supabase/ProductSupabaseDataSource.ts";
import {ProductRepositoryDataSource} from "@/data/repository/ProductRepositoryDataSource.ts";
import {ProductReadyByCategory} from "@/domain/usecase/product/ProductReadyByCategory.ts";
import {UserTransactionSupabaseDataSource} from "@/data/datasource/supabase/UserTransactionSupabaseDataSource.ts";
import {UserTransactionRepositoryDataSource} from "@/data/repository/UserTransactionRepositoryDataSource.ts";
import {UserTransactionCreate} from "@/domain/usecase/user_transaction/UserTransactionCreate.ts";
import {CardSupabaseDataSource} from "@/data/datasource/supabase/CardSupabaseDataSource.ts";
import {CardRepositoryDataSource} from "@/data/repository/CardRepositoryDataSource.ts";
import {CardRead} from "@/domain/usecase/card/CardRead.ts";
import {CardInteractionSupabaseDataSource} from "@/data/datasource/supabase/CardInteractionSupabaseDataSource.ts";
import {CardInteractionRepositoryDataSource} from "@/data/repository/CardInteractionRepositoryDataSource.ts";
import {CardInteractionCreate} from "@/domain/usecase/card_interaction/CardInteractionCreate.ts";
import {RecommendationPurchase} from "@/domain/usecase/recommendation/RecommendationPurchase.ts";
import {RecommendationJoheDataSource} from "@/data/datasource/johe/RecommendationJoheDataSource.ts";
import {RecommendationRepositoryDataSource} from "@/data/repository/RecommendationRepositoryDataSource.ts";

export default function ProductPageViewModel(categoryId: number) {
    const {
        user,
        incBalance
    } = useUser();

    const productDataSource = useMemo(() => new ProductSupabaseDataSource(), []);
    const productRepository = useMemo(() => new ProductRepositoryDataSource(productDataSource), [productDataSource]);

    const userTransactionDataSource = useMemo(() => new UserTransactionSupabaseDataSource(), []);
    const userTransactionRepository = useMemo(() => new UserTransactionRepositoryDataSource(userTransactionDataSource), [userTransactionDataSource]);

    const cardDataSource = useMemo(() => new CardSupabaseDataSource(), []);
    const cardRepository = useMemo(() => new CardRepositoryDataSource(cardDataSource),[cardDataSource]);

    const cardInteractionDataSource = useMemo(() => new CardInteractionSupabaseDataSource(), []);
    const cardInteractionRepository = useMemo(() => new CardInteractionRepositoryDataSource(cardInteractionDataSource),[cardInteractionDataSource]);

    const recommendationDataSource = useMemo(() => new RecommendationJoheDataSource(), []);
    const recommendationRepository = useMemo(() => new RecommendationRepositoryDataSource(recommendationDataSource), [recommendationDataSource]);

    const productReadByCategoryUseCase = useMemo(() => new ProductReadyByCategory(productRepository), [productRepository]);
    const productRead = useCallback(async () => {
        return await productReadByCategoryUseCase.invoke(categoryId);
    }, [productReadByCategoryUseCase, categoryId]);
    const {
        data: products,
        error: productsError,
        loading: productsLoading,
        refetch: productsRefetch,
    } = useSupabaseQuery(productRead);

    const cardReadUseCase = useMemo(() => new CardRead(cardRepository), [cardRepository]);
    const cardRead = useCallback(async () => {
        return await cardReadUseCase.invoke(categoryId);
    }, [cardReadUseCase, categoryId]);
    const {
        data: cards,
        error: cardsError,
        loading: cardsLoading,
        refetch: cardsRefetch,
    } = useSupabaseQuery(cardRead);

    const userTransactionCreateUseCase = useMemo(() => new UserTransactionCreate(userTransactionRepository), [userTransactionRepository]);
    const userTransactionCreate = useCallback(async (data: InsertUserTransaction) => {
        return await userTransactionCreateUseCase.invoke(data);
    }, [userTransactionCreateUseCase]);

    const cardInteractionCreateUseCase = useMemo(() => new CardInteractionCreate(cardInteractionRepository),[cardInteractionRepository]);
    const cardInteractionCreate = useCallback(async (data: InsertCardInteraction) => {
        return await cardInteractionCreateUseCase.invoke(data);
    }, [cardInteractionCreateUseCase]);

    const recommendationPurchaseUseCase = useMemo(() => new RecommendationPurchase(recommendationRepository), [recommendationRepository]);
    const recommendationPurchase = useCallback(async (uid: string, data: string[]) => {
        return await recommendationPurchaseUseCase.invoke(uid, data);
    }, [recommendationPurchaseUseCase]);

    function onPurchase(product: Product, amount: number, win: boolean) {
        if(user === null) return;
        const multiplier = win ? product.profit : product.loss;
        const res = product.saldo_awal * amount * multiplier * (win ? 1 : -1);
        userTransactionCreate({
            nudge_user_id: user.id,
            nudge_product_id: product.id,
            win: win,
            price: res
        } as InsertUserTransaction)
        recommendationPurchase(user.id, [product.product_title]);
        incBalance(res);
    }

    return {
        products,
        productsError,
        productsLoading,
        productsRefetch,
        cards,
        cardsError,
        cardsLoading,
        cardsRefetch,
        onPurchase,
    }
}
import {useCallback, useMemo} from "react";
import RecordSupabaseDataSource from "@/data/datasource/supabase/RecordSupabaseDataSource.ts";
import {RecordRepositoryDataSource} from "@/data/repository/RecordRepositoryDataSource.ts";
import {RecordGetByCategory} from "@/domain/usecase/RecordGetByCategory.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {TransactionHistorySupabaseDataSource} from "@/data/datasource/supabase/TransactionHistorySupabaseDataSource.ts";
import {TransactionHistoryRepositoryDatasource} from "@/data/repository/TransactionHistoryRepositoryDatasource.ts";
import {TransactionHistoryGetById} from "@/domain/usecase/TransactionHistoryGetById.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default function ProductPageViewModel(category: RecordCategory) {
    const {
        user,
        incBalance
    } = useUser();

    const recordDataSource = useMemo(() => new RecordSupabaseDataSource(), []);
    const recordRepository = useMemo(() => new RecordRepositoryDataSource(recordDataSource), [recordDataSource]);

    const transactionHistoryDataSource = useMemo(() => new TransactionHistorySupabaseDataSource(), []);
    const transactionHistoryRepository = useMemo(() => new TransactionHistoryRepositoryDatasource(transactionHistoryDataSource), [transactionHistoryDataSource]);

    const recordGetByCategoryUseCase = useMemo(() => new RecordGetByCategory(recordRepository), [recordRepository]);
    const recordGetByCategory = useCallback(async () => {
        return await recordGetByCategoryUseCase.invoke(category)
    }, [recordGetByCategoryUseCase, category])
    const {
        data: records,
        error: recordsError,
        loading: recordsLoading,
        refetch: recordsRefetch,
    } = useSupabaseQuery(recordGetByCategory)

    

    function onPurchaseWin(amount: number, profit: number) {
        const res = amount * (profit / 100);
        incBalance(res);
    }

    function onPurchaseLose(amount: number, profit: number) {
        const res = amount * (profit / 100);
        incBalance(-res);
    }

    return {
        records,
        recordsError,
        recordsLoading,
        recordsRefetch,
        onPurchaseWin,
        onPurchaseLose
    }
}
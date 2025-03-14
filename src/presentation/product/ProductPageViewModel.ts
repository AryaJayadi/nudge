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
import {TransactionHistoryInsert} from "@/domain/usecase/TransactionHistoryInsert.ts";
import {Record} from "@/domain/model/Record.ts";

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

    const transactionHistoryInsertUseCase = useMemo(() => new TransactionHistoryInsert(transactionHistoryRepository), [transactionHistoryRepository]);
    const insertTransactionHistory = useCallback(async (data: InsertTransactionHistory[]) => {
        return await transactionHistoryInsertUseCase.invoke(data);
    }, [transactionHistoryInsertUseCase])

    function onPurchase(record: Record, win: boolean) {
        if(user === null) return;
        insertTransactionHistory([{
            record_id: record.id,
            user_id: user.id,
            win: win
        }] as InsertTransactionHistory[])
        const res = 5000000 * (12.5 / 100);
        incBalance(win ? res : -res);
    }

    return {
        records,
        recordsError,
        recordsLoading,
        recordsRefetch,
        onPurchase
    }
}
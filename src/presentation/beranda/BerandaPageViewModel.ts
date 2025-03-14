import {useCallback, useMemo} from "react";
import {TransactionHistorySupabaseDataSource} from "@/data/datasource/supabase/TransactionHistorySupabaseDataSource.ts";
import {TransactionHistoryRepositoryDatasource} from "@/data/repository/TransactionHistoryRepositoryDatasource.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {TransactionHistoryGetById} from "@/domain/usecase/TransactionHistoryGetById.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";

export default function BerandaPageViewModel() {
    const {
        user
    } = useUser();

    const transactionHistoryDataSource = useMemo(() => new TransactionHistorySupabaseDataSource(), []);
    const transactionHistoryRepository = useMemo(() => new TransactionHistoryRepositoryDatasource(transactionHistoryDataSource), [transactionHistoryDataSource]);

    const transactionHistoryGetByIdUseCase = useMemo(() => new TransactionHistoryGetById(transactionHistoryRepository), [transactionHistoryRepository]);
    const getTransactionHistory = useCallback(async () => {
        if (user === null) {
            return {
                success: false,
                data: null,
                error: {message: "User is not logged in", details: "", hint: "", code: ""} as PostgrestError
            } as BaseSupabaseResponse<TransactionHistory[]>;
        }
        return await transactionHistoryGetByIdUseCase.invoke(user.id);
    }, [transactionHistoryRepository, user]);
    const {
        data: transactionHistory,
        error: transactionHistoryError,
        loading: transactionHistoryLoading,
        refetch: transactionHistoryRefetch,
    } = useSupabaseQuery(getTransactionHistory)

    return {
        transactionHistory,
        transactionHistoryError,
        transactionHistoryLoading,
        transactionHistoryRefetch
    }
}
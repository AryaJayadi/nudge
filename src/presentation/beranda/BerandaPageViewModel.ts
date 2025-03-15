import {useCallback, useEffect, useMemo, useState} from "react";
import {TransactionHistorySupabaseDataSource} from "@/data/datasource/supabase/TransactionHistorySupabaseDataSource.ts";
import {TransactionHistoryRepositoryDatasource} from "@/data/repository/TransactionHistoryRepositoryDatasource.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {TransactionHistoryGetById} from "@/domain/usecase/TransactionHistoryGetById.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {useSupabaseQuery} from "@/lib/hook/UseSupabaseQuery.ts";
import {TransactionHistoryGetWithDetails} from "@/domain/usecase/TransactionHistoryGetWithDetails.ts";

export default function BerandaPageViewModel() {
    const {
        user
    } = useUser();
    const [transactions, setTransactions] = useState<TransactionHistoryWithDetails[]>([])

    const transactionHistoryDataSource = useMemo(() => new TransactionHistorySupabaseDataSource(), []);
    const transactionHistoryRepository = useMemo(() => new TransactionHistoryRepositoryDatasource(transactionHistoryDataSource), [transactionHistoryDataSource]);

    const transactionHistoryGetWithDetailsUseCase = useMemo(() => new TransactionHistoryGetWithDetails(transactionHistoryRepository), [transactionHistoryRepository]);
    const getTransactionHistories = useCallback(async () => {
        if (user === null) {
            return {
                success: false,
                data: null,
                error: {message: "User is not logged in", details: "", hint: "", code: ""} as PostgrestError
            } as BaseSupabaseResponse<TransactionHistoryWithDetails[]>;
        }
        return await transactionHistoryGetWithDetailsUseCase.invoke(user.id);
    }, [transactionHistoryGetWithDetailsUseCase, user])

    useEffect(() => {
        if (user) {
            getTransactionHistories()
                .then((res) => {
                    if(res.error === null) setTransactions(res.data);
                })
        }
    }, [user]);

    return {
        transactions
    }
}
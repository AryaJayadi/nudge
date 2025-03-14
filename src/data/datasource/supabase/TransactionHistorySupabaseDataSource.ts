import {TransactionHistoryDataSource} from "@/data/datasource/TransactionHistoryDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class TransactionHistorySupabaseDataSource implements TransactionHistoryDataSource {

    async insertTransactionHistories(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        const res = await supabase
            .from("transaction_history")
            .upsert(data)
            .select();

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
import {TransactionHistoryDataSource} from "@/data/datasource/TransactionHistoryDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class TransactionHistorySupabaseDataSource implements TransactionHistoryDataSource {

    async getTransactionHistories(userId: string): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        const res = await supabase
            .from("transaction_history")
            .select("*")
            .eq("user_id", userId);

        return mapSupabaseResponse(res, (data) => data || []);
    }

    async getTransactionHistoriesWithDetails(userId: string): Promise<BaseSupabaseResponse<TransactionHistoryWithDetails[]>> {
        const res = await supabase
            .from("transaction_history")
            .select("*, records(*, record_categories(*))")
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        return mapSupabaseResponse(res, (data) => data || []);
    }

    async insertTransactionHistories(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        const res = await supabase
            .from("transaction_history")
            .upsert(data)
            .select();

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
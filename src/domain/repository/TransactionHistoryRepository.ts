import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface TransactionHistoryRepository {

    getTransactionHistories(userId: string): Promise<BaseSupabaseResponse<TransactionHistory[]>>;

    getTransactionHistoriesWithDetails(userId: string): Promise<BaseSupabaseResponse<TransactionHistoryWithDetails[]>>;

    insertTransactionHistories(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>>;
}
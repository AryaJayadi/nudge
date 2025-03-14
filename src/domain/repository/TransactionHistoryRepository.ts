import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface TransactionHistoryRepository {

    insertTransactionHistories(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>>;
}
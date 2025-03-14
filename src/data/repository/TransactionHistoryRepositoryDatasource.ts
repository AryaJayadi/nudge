import {TransactionHistoryRepository} from "@/domain/repository/TransactionHistoryRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {TransactionHistoryDataSource} from "@/data/datasource/TransactionHistoryDataSource.ts";

export class TransactionHistoryRepositoryDatasource implements TransactionHistoryRepository {
    private datasource: TransactionHistoryDataSource;

    constructor(_datasource: TransactionHistoryDataSource) {
        this.datasource = _datasource;
    }

    getTransactionHistories(userId: string): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        return this.datasource.getTransactionHistories(userId);
    }

    getTransactionHistoriesWithDetails(userId: string): Promise<BaseSupabaseResponse<TransactionHistoryWithDetails[]>> {
        return this.datasource.getTransactionHistoriesWithDetails(userId);
    }

    insertTransactionHistories(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        return this.datasource.insertTransactionHistories(data);
    }
}
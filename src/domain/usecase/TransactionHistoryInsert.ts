import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {TransactionHistoryRepository} from "@/domain/repository/TransactionHistoryRepository.ts";

interface TransactionHistoryInsertUseCase {
    invoke(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>>;
}

export class TransactionHistoryInsert implements TransactionHistoryInsertUseCase {
    private repository: TransactionHistoryRepository;

    constructor(_repository: TransactionHistoryRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertTransactionHistory[]): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        return this.repository.insertTransactionHistories(data);
    }
}
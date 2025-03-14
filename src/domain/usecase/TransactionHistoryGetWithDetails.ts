import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {TransactionHistoryRepository} from "@/domain/repository/TransactionHistoryRepository.ts";

interface TransactionHistoryGetWithDetailsUseCase {
    invoke(userId: string): Promise<BaseSupabaseResponse<TransactionHistoryWithDetails[]>>;
}

export class TransactionHistoryGetWithDetails implements TransactionHistoryGetWithDetailsUseCase {
    private repository: TransactionHistoryRepository

    constructor(_repository: TransactionHistoryRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<BaseSupabaseResponse<TransactionHistoryWithDetails[]>> {
        return this.repository.getTransactionHistoriesWithDetails(userId);
    }
}
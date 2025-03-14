import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {TransactionHistoryRepository} from "@/domain/repository/TransactionHistoryRepository.ts";

interface TransactionHistoryGetByIdUseCase {
    invoke(userId: string) : Promise<BaseSupabaseResponse<TransactionHistory[]>>;
}

export class TransactionHistoryGetById implements TransactionHistoryGetByIdUseCase {
    private repository: TransactionHistoryRepository;

    constructor(_repository: TransactionHistoryRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<BaseSupabaseResponse<TransactionHistory[]>> {
        return this.repository.getTransactionHistories(userId);
    }
}
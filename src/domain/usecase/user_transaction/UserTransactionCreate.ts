import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserTransactionRepository} from "@/domain/repository/UserTransactionRepository.ts";

interface UserTransactionCreateUseCase {
    invoke(data: InsertUserTransaction): Promise<BaseSupabaseResponse<UserTransaction>>;
}

export class UserTransactionCreate implements UserTransactionCreateUseCase {

    private repository: UserTransactionRepository;

    constructor(_repository: UserTransactionRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserTransaction): Promise<BaseSupabaseResponse<UserTransaction>> {
        return this.repository.create(data);
    }
}
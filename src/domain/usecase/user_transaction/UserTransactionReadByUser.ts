import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserTransactionRepository} from "@/domain/repository/UserTransactionRepository.ts";

interface UserTransactionReadByUserUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserTransactionWithDetails[]>>;
}

export class UserTransactionReadByUser implements UserTransactionReadByUserUseCase {

    private repository: UserTransactionRepository;

    constructor(_repository: UserTransactionRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserTransactionWithDetails[]>> {
        return this.repository.readByUser(uid);
    }
}
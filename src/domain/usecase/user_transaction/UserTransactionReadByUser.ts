import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserTransactionRepository} from "@/domain/repository/UserTransactionRepository.ts";

interface UserTransactionReadByUserUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserTransaction[]>>;
}

export class UserTransactionReadByUser implements UserTransactionReadByUserUseCase {

    private repository: UserTransactionRepository;

    constructor(_repository: UserTransactionRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserTransaction[]>> {
        return this.repository.readByUser(uid);
    }
}
import {UserTransactionRepository} from "@/domain/repository/UserTransactionRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export class UserTransactionRepositoryDataSource implements UserTransactionRepository {

    private repository: UserTransactionRepository;

    constructor(_repository: UserTransactionRepository) {
        this.repository = _repository;
    }

    create(data: InsertUserTransaction): Promise<BaseSupabaseResponse<UserTransaction>> {
        return this.repository.create(data);
    }

    readByUser(uid: string): Promise<BaseSupabaseResponse<UserTransactionWithDetails[]>> {
        return this.repository.readByUser(uid);
    }
}
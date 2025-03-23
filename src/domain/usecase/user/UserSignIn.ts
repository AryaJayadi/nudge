import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserSignInUseCase {
    invoke: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
}

export class UserSignIn implements UserSignInUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        return this.repository.signIn(data);
    }
}
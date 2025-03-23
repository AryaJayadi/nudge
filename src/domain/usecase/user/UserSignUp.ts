import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserSignUpUseCase {
    invoke: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
}

export class UserSignUp implements UserSignUpUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        return this.repository.signUp(data);
    }
}
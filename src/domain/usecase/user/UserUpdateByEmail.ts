import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserUpdateByEmailUseCase {
    invoke(email: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>>;
}

export class UserUpdateByEmail implements UserUpdateByEmailUseCase {

    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(email: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>> {
        return this.repository.updateByEmail(email, data);
    }
}
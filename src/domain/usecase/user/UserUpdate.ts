import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserUpdateUseCase {
    invoke(uid: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>>;
}

export class UserUpdate implements UserUpdateUseCase {

    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(uid: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>> {
        return this.repository.update(uid, data);
    }
}
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRewardRepository} from "@/domain/repository/UserRewardRepository.ts";

interface UserRewardCreateUseCase {
    invoke(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>>;
}

export class UserRewardCreate implements UserRewardCreateUseCase {

    private repository: UserRewardRepository;

    constructor(_repository: UserRewardRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>> {
        return this.repository.create(data);
    }
}
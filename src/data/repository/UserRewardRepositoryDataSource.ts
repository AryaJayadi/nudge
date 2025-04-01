import {UserRewardRepository} from "@/domain/repository/UserRewardRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRewardDataSource} from "@/data/datasource/UserRewardDataSource.ts";

export class UserRewardRepositoryDataSource implements UserRewardRepository {

    private datasource: UserRewardDataSource;

    constructor(_datasource: UserRewardDataSource) {
        this.datasource = _datasource;
    }

    create(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>> {
        return this.datasource.create(data);
    }
}
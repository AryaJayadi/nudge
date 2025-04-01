import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserRewardRepository {

    create(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>>;
}
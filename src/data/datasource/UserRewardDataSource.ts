import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserRewardDataSource {

    create(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>>;
}
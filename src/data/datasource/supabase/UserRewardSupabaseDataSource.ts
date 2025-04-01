import {UserRewardDataSource} from "@/data/datasource/UserRewardDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class UserRewardSupabaseDataSource implements UserRewardDataSource {

    private readonly table = supabase.from("nudge_user_reward");

    async create(data: InsertUserReward): Promise<BaseSupabaseResponse<UserReward>> {
        const res = await this.table
            .upsert(data)
            .select();

        return singleSupabaseResponseMapper(res);
    }
}
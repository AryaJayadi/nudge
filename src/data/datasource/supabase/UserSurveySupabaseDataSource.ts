import {UserSurveyDataSource} from "@/data/datasource/UserSurveyDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class UserSurveySupabaseDataSource implements UserSurveyDataSource {

    private readonly table = supabase.from("nudge_user_survey");

    async create(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        const res = await this.table
            .upsert({
                nudge_user_id: uid
            } as InsertUserSurvey)
            .select();

        return singleSupabaseResponseMapper(res);
    }

    async read(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        const res = await this.table
            .select("*")
            .eq("nudge_user_id", uid);

        return singleSupabaseResponseMapper(res);
    }

    async update(uid: string, data: UpdateUserSurvey): Promise<BaseSupabaseResponse<UserSurvey>> {
        const res = await this.table
            .update(data)
            .eq("nudge_user_id", uid)
            .select();

        return singleSupabaseResponseMapper(res);
    }
}
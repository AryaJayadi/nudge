import {UserConsentDataSource} from "@/data/datasource/UserConsentDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class UserConsentSupabaseDataSource implements UserConsentDataSource {

    private readonly table = supabase.from("nudge_user_consent");

    async create(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        const res = await this.table
            .upsert(uid)
            .select();

        return singleSupabaseResponseMapper(res);
    }

    async read(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        const res = await this.table
            .select("*")
            .eq("nudge_user_id", uid);

        return singleSupabaseResponseMapper(res);
    }

    async update(uid: string, data: UpdateUserConsent): Promise<BaseSupabaseResponse<UserConsent>> {
        const res = await this.table
            .update(data)
            .eq("nudge_user_id", uid)
            .select("*");

        return singleSupabaseResponseMapper(res);
    }
}
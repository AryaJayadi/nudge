import {UserTransactionDataSource} from "@/data/datasource/UserTransactionDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class UserTransactionSupabaseDataSource implements UserTransactionDataSource {

    private readonly table = supabase.from("nudge_user_transaction");

    async create(data: InsertUserTransaction): Promise<BaseSupabaseResponse<UserTransaction>> {
        const res = await this.table
            .upsert(data)
            .select();

        return singleSupabaseResponseMapper(res);
    }

    async readByUser(uid: string): Promise<BaseSupabaseResponse<UserTransaction[]>> {
        const res = await this.table
            .select()
            .eq("nudge_user_id", uid);

        return mapSupabaseResponse(res, (data) => data || [])
    }
}
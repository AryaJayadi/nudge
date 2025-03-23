import {CardDataSource} from "@/data/datasource/CardDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class CardSupabaseDataSource implements CardDataSource {

    private readonly table = supabase.from("nudge_card");

    async readByCategory(categoryId: number): Promise<BaseSupabaseResponse<Card[]>> {
        const res = await this.table
            .select()
            .eq("nudge_category_id", categoryId);

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
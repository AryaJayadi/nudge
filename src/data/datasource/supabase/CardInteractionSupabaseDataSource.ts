import {CardInteractionDataSource} from "@/data/datasource/CardInteractionDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class CardInteractionSupabaseDataSource implements CardInteractionDataSource {

    private readonly table = supabase.from("nudge_card_interaction");

    async create(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>> {
        const res = await this.table
            .upsert(data)
            .select();

        return singleSupabaseResponseMapper(res);
    }
}
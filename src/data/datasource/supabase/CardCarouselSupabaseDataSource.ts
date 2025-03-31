import {CardCarouselDataSource} from "@/data/datasource/CardCarouselDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class CardCarouselSupabaseDataSource implements CardCarouselDataSource {

    private readonly table = supabase.from("nudge_carousel");

    async read(): Promise<BaseSupabaseResponse<CardCarousel[]>> {
        const res = await this.table
            .select();

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
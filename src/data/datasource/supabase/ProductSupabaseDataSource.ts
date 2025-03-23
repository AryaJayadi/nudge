import {ProductDataSource} from "@/data/datasource/ProductDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class ProductSupabaseDataSource implements ProductDataSource {

    private readonly table = supabase.from("nudge_product");

    async read(): Promise<BaseSupabaseResponse<Product[]>> {
        const res = await this.table
            .select("*");

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
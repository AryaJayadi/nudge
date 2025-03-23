import {ProductDataSource} from "@/data/datasource/ProductDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {data} from "autoprefixer";

export class ProductSupabaseDataSource implements ProductDataSource {

    private readonly table = supabase.from("nudge_product");

    async read(): Promise<BaseSupabaseResponse<Product[]>> {
        const res = await this.table
            .select("*");

        return mapSupabaseResponse(res, (data) => data || []);
    }

    async readByCategory(categoryId: number): Promise<BaseSupabaseResponse<Product[]>> {
        const res = await this.table
            .select("*")
            .eq("nudge_category_id", categoryId);

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
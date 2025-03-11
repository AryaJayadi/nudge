import RecordDataSource from "@/data/datasource/RecordDataSource.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default class RecordSupabaseDataSource implements RecordDataSource {

    async getRecordByCategory(category: RecordCategory): Promise<BaseSupabaseResponse<Record[]>> {
        const res = await supabase
            .from("records")
            .select("*")
            .eq("record_name", category);

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
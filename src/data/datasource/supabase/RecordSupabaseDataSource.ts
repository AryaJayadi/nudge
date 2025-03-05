import RecordDataSource from "@/data/datasource/RecordDataSource.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export default class RecordSupabaseDataSource implements RecordDataSource {

    async getRecordByCategory(category: RecordCategory): Promise<Record[]> {
        const response = await supabase
            .from("records")
            .select("*")
            .eq("record_name", category);

        if (response.error) {
            console.error("Error fetching record by category:", response.error.message);
            return [];
        }

        if (!response.data) {
            console.error("Error fetching record by category:");
            return [];
        }

        console.log(response);
        return response.data as Record[];
    }
}
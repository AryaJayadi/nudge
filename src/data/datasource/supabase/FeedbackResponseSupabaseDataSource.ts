import {FeedbackResponseDataSource} from "@/data/datasource/FeedbackResponseDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class FeedbackResponseSupabaseDataSource implements FeedbackResponseDataSource {

    private readonly table = supabase.from("nudge_feedback_response");

    async create(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>> {
        const res = await this.table
            .upsert(data)
            .select();

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
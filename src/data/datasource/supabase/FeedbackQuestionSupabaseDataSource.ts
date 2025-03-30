import {FeedbackQuestionDataSource} from "@/data/datasource/FeedbackQuestionDataSource.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export class FeedbackQuestionSupabaseDataSource implements FeedbackQuestionDataSource {

    private readonly table = supabase.from("nudge_feedback_question");

    async read(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>> {
        const res = await this.table
            .select();

        return mapSupabaseResponse(res, (data) => data || []);
    }
}
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FeedbackResponseRepository {
    create(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>>;
}
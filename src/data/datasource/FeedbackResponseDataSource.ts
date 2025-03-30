import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FeedbackResponseDataSource {
    create(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>>;
}
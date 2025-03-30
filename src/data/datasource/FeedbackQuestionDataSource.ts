import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FeedbackQuestionDataSource {
    read(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>>;
}
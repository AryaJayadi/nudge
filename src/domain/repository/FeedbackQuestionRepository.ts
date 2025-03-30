import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FeedbackQuestionRepository {
    read(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>>;
}
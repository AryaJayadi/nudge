import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserSurveyRepository {

    create(uid: string): Promise<BaseSupabaseResponse<UserSurvey>>;

    read(uid: string): Promise<BaseSupabaseResponse<UserSurvey>>;

    update(uid: string, data: UpdateUserSurvey): Promise<BaseSupabaseResponse<UserSurvey>>;
}
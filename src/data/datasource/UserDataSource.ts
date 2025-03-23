import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default interface UserDataSource {

    signUp(data: InsertUser): Promise<BaseSupabaseResponse<User>>;

    signIn(data: InsertUser): Promise<BaseSupabaseResponse<User>>;

    checkConsent(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    checkSurvey(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    insertUserConsent(data: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>>;

    insertUserFinishSurvey(data: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>>;

    insertPublicUser(data: InsertPublicUser): Promise<BaseSupabaseResponse<PublicUser>>;
}
import {AuthResponse, PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default interface UserDataSource {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;

    checkConsent(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    checkSurvey(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    insertUserConsent(data: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>>;

    insertUserFinishSurvey(data: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>>;
}
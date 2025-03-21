import {AuthResponse} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserRepository {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;

    checkConsent(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    checkSurvey(userId: string): Promise<BaseSupabaseResponse<boolean>>;

    insertUserConsent(data: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>>;

    insertUserFinishSurvey(data: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>>;

    insertPublicUser(data: InsertPublicUser): Promise<BaseSupabaseResponse<PublicUser>>;
}
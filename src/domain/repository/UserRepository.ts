import {AuthResponse, PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {InsertUserConsentForm} from "@/domain/model/request/InsertUserConsentForm.ts";
import {InsertUserFinishSurvey} from "@/domain/model/request/InsertUserFinishSurvey.ts";

export interface UserRepository {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;

    checkConsent(userId: string): Promise<boolean | PostgrestError>;

    checkSurvey(userId: string): Promise<boolean | PostgrestError>;

    insertUserConsent(data: InsertUserConsentForm): Promise<UserConsentForm | PostgrestError>;

    insertUserFinishSurvey(data: InsertUserFinishSurvey): Promise<UserFinishSurveys | PostgrestError>;
}
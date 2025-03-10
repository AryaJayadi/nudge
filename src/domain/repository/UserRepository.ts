import {AuthResponse, PostgrestError, PostgrestResponse} from "@supabase/supabase-js";

export interface UserRepository {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;

    checkConsent(userId: string): Promise<boolean | PostgrestError>;

    checkSurvey(userId: string): Promise<boolean | PostgrestError>;
}
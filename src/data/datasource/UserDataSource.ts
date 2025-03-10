import {AuthResponse, PostgrestError, PostgrestResponse} from "@supabase/supabase-js";

export default interface UserDataSource {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;

    checkConsent(userId: string): Promise<boolean | PostgrestError>;

    checkSurvey(userId: string): Promise<boolean | PostgrestError>;
}
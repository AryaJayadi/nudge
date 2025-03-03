import {AuthResponse} from "@supabase/supabase-js";

export default interface UserDataSource {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;
}
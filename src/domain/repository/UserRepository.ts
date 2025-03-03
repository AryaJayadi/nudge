import {AuthResponse} from "@supabase/supabase-js";

export interface UserRepository {

    signUp(email: string, password: string): Promise<AuthResponse>;

    signIn(email: string, password: string): Promise<AuthResponse>;
}
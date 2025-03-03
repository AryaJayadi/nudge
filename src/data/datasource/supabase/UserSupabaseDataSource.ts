import UserDataSource from "@/data/datasource/UserDataSource.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {AuthResponse} from "@supabase/supabase-js";

export default class UserSupabaseDataSource implements UserDataSource {

    async signUp(email: string, password: string): Promise<AuthResponse> {
        const res = await supabase.auth.signUp({email, password});
        console.log(res);
        return res;
    }
}
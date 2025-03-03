import UserDataSource from "@/data/datasource/UserDataSource.ts";
import supabase from "@/core/DatabaseSupabase.tsx";

export default class UserSupabaseDataSource implements UserDataSource {

    async signUp(email: String, password: string): Promise<void> {
        const res = await supabase.auth.signUp({email, password});
        return;
    }
}
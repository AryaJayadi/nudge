import UserDataSource from "@/data/datasource/UserDataSource.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {AuthResponse, PostgrestError} from "@supabase/supabase-js";
import {InsertUserFinishSurvey} from "@/domain/model/request/InsertUserFinishSurvey.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default class UserSupabaseDataSource implements UserDataSource {

    async signUp(email: string, password: string): Promise<AuthResponse> {
        const res = await supabase.auth.signUp({email, password});
        console.log(res);
        return res;
    }

    async signIn(email: string, password: string): Promise<AuthResponse> {
        const res = await supabase.auth.signInWithPassword({email, password});
        console.log(res);
        return res;
    }

    async checkConsent(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        const res = await supabase
            .from("user_consent_form")
            .select("consent_agreement")
            .eq("user_id", userId)
            .single<boolean>();

        return mapSupabaseResponse(res, (data) => data ?? false);
    }

    async checkSurvey(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        const res = await supabase
            .from("user_finish_surveys")
            .select("has_finished")
            .eq("user_id", userId)
            .single<boolean>();

        return mapSupabaseResponse(res, (data) => data ?? false);
    }

    async insertUserConsent(form: InsertUserConsentForm): Promise<UserConsentForm | PostgrestError> {
        const {data, error} = await supabase
            .from('user_consent_form')
            .insert([
                form
            ]);

        if (error) return error;
        return data;
    }

    async insertUserFinishSurvey(form: InsertUserFinishSurvey): Promise<UserFinishSurveys | PostgrestError> {
        const {data, error} = await supabase
            .from("user_finish_surveys")
            .insert([
                form
            ])

        if (error) return error;
        return data;
    }
}
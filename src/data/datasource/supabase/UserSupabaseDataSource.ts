import UserDataSource from "@/data/datasource/UserDataSource.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {AuthResponse} from "@supabase/supabase-js";
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

    async insertUserConsent(form: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>> {
        const res = await supabase
            .from('user_consent_form')
            .upsert(form)
            .select();

        return mapSupabaseResponse(res, (data) => {
            if (data && Array.isArray(data) && data.length > 0) {
                return data[0] as UserConsentForm;
            }
            return null;
        });
    }

    async insertUserFinishSurvey(form: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>> {
        const res = await supabase
            .from("user_finish_surveys")
            .upsert(form)
            .select();

        return mapSupabaseResponse(res, (data) => {
            if (data && Array.isArray(data) && data.length > 0) {
                return data[0] as UserFinishSurveys;
            }
            return null;
        });
    }
}
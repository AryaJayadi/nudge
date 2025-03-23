import UserDataSource from "@/data/datasource/UserDataSource.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {AuthResponse} from "@supabase/supabase-js";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {InsertUserConsentForm} from "@/domain/model/request/InsertUserConsentForm.ts";
import {InsertUserFinishSurvey} from "@/domain/model/request/InsertUserFinishSurvey.ts";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export default class UserSupabaseDataSource implements UserDataSource {

    private readonly table = supabase.from("nudge_user");

    async signUp(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        const res = await this.table
            .upsert(data)
            .select();

        return singleSupabaseResponseMapper(res);
    }

    async signIn(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        if (data.email) {
            const res = await this.table
                .select("*")
                .eq("email", data.email)

            return singleSupabaseResponseMapper(res);
        } else if (data.phone) {
            const res = await this.table
                .select("*")
                .eq("phone", data.phone)

            return singleSupabaseResponseMapper(res);
        }
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

    async insertPublicUser(data: InsertPublicUser): Promise<BaseSupabaseResponse<PublicUser>> {
        const res = await supabase
            .from("users")
            .upsert(data)
            .select();

        return mapSupabaseResponse(res, (data) => {
            if (data && Array.isArray(data) && data.length > 0) {
                return data[0] as PublicUser;
            }
            return null;
        })
    }
}
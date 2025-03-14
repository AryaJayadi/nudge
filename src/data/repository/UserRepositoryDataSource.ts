import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {AuthResponse} from "@supabase/supabase-js";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {InsertUserConsentForm} from "@/domain/model/request/InsertUserConsentForm.ts";
import {InsertUserFinishSurvey} from "@/domain/model/request/InsertUserFinishSurvey.ts";

export class UserRepositoryDataSource implements UserRepository {
    datasource: UserRepository;

    constructor(_datasource: UserRepository) {
        this.datasource = _datasource;
    }

    signUp(email: string, password: string): Promise<AuthResponse> {
        return this.datasource.signUp(email, password);
    }

    signIn(email: string, password: string): Promise<AuthResponse> {
        return this.datasource.signIn(email, password);
    }

    checkConsent(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        return this.datasource.checkConsent(userId);
    }

    checkSurvey(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        return this.datasource.checkSurvey(userId);
    }

    insertUserConsent(data: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>> {
        return this.datasource.insertUserConsent(data);
    }

    insertUserFinishSurvey(data: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>> {
        return this.datasource.insertUserFinishSurvey(data);
    }

    insertPublicUser(data: InsertPublicUser): Promise<BaseSupabaseResponse<PublicUser>> {
        return this.datasource.insertPublicUser(data);
    }
}
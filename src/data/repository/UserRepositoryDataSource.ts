import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {InsertUserConsentForm} from "@/domain/model/request/InsertUserConsentForm.ts";
import {InsertUserFinishSurvey} from "@/domain/model/request/InsertUserFinishSurvey.ts";
import UserDataSource from "@/data/datasource/UserDataSource.ts";

export class UserRepositoryDataSource implements UserRepository {
    datasource: UserDataSource;

    constructor(_datasource: UserDataSource) {
        this.datasource = _datasource;
    }

    signUp(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        return this.datasource.signUp(data);
    }

    signIn(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        return this.datasource.signIn(data);
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

    update(uid: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>> {
        return this.datasource.update(uid, data);
    }

    updateByEmail(email: string, data: UpdateUser): Promise<BaseSupabaseResponse<User>> {
        return this.datasource.updateByEmail(email, data);
    }
}
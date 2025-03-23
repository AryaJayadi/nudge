import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserSurveyDataSource} from "@/data/datasource/UserSurveyDataSource.ts";

export class UserSurveyRepositoryDataSource implements UserSurveyRepository {

    private datasource: UserSurveyDataSource;

    constructor(_datasource: UserSurveyDataSource) {
        this.datasource = _datasource;
    }

    create(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.datasource.create(uid);
    }

    read(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.datasource.read(uid);
    }

    update(uid: string, data: UpdateUserSurvey): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.datasource.update(uid, data);
    }
}
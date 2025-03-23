import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";

interface UserSurveyUpdateUseCase {
    invoke(uid: string, data: UpdateUserSurvey): Promise<BaseSupabaseResponse<UserSurvey>>;
}

export class UserSurveyUpdate implements UserSurveyUpdateUseCase {

    private repository: UserSurveyRepository;

    constructor(_repository: UserSurveyRepository) {
        this.repository = _repository;
    }

    invoke(uid: string, data: UpdateUserSurvey): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.repository.update(uid, data);
    }
}
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";

interface UserSurveyCreateUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserSurvey>>;
}

export class UserSurveyCreate implements UserSurveyCreateUseCase {

    private repository: UserSurveyRepository;

    constructor(_repository: UserSurveyRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.repository.create(uid);
    }
}
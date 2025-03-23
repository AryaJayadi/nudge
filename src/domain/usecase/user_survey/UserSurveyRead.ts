import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";

interface UserSurveyReadUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserSurvey>>;
}

export class UserSurveyRead implements UserSurveyReadUseCase {

    private repository: UserSurveyRepository;

    constructor(_repository: UserSurveyRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserSurvey>> {
        return this.repository.read(uid);
    }
}
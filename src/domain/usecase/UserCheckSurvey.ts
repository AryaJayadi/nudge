import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

interface UserCheckSurveyUseCase {
    invoke(userId: string): Promise<BaseSupabaseResponse<boolean>>;
}

export class UserCheckSurvey implements UserCheckSurveyUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        return this.repository.checkSurvey(userId);
    }

}
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserFinishSurveyUseCase {
    invoke(data: InsertUserFinishSurvey) : Promise<BaseSupabaseResponse<UserFinishSurveys>>;
}

export class UserFinishSurvey implements UserFinishSurveyUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserFinishSurvey): Promise<BaseSupabaseResponse<UserFinishSurveys>> {
        return this.repository.insertUserFinishSurvey(data);
    }
}
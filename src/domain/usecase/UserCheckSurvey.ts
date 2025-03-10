import {PostgrestError} from "@supabase/supabase-js";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserCheckSurveyUseCase {
    invoke(userId: string): Promise<boolean | PostgrestError>;
}

export class UserCheckSurvey implements UserCheckSurveyUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<boolean | PostgrestError> {
        return this.repository.checkSurvey(userId);
    }

}
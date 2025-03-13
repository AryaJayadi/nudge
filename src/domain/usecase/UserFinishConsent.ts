import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserFinishConsentUseCase {
    invoke(data: InsertUserConsentForm) : Promise<BaseSupabaseResponse<UserConsentForm>>;
}

export class UserFinishConsent implements UserFinishConsentUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserConsentForm): Promise<BaseSupabaseResponse<UserConsentForm>> {
        return this.repository.insertUserConsent(data);
    }
}
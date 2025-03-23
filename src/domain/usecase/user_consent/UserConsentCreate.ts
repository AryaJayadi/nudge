import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";

interface UserConsentCreateUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserConsent>>;
}

export class UserConsentCreate implements UserConsentCreateUseCase {
    private repository: UserConsentRepository;

    constructor(_repository: UserConsentRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.repository.create(uid);
    }
}
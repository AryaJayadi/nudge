import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";

interface UserConsentReadUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<UserConsent>>;
}

export class UserConsentRead implements UserConsentReadUseCase {

    private repository: UserConsentRepository;

    constructor(_repository: UserConsentRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.repository.read(uid);
    }
}
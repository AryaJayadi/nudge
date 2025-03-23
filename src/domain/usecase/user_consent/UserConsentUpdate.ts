import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";

interface UserConsentUpdateUseCase {
    invoke(uid: string, data: UpdateUserConsent): Promise<BaseSupabaseResponse<UserConsent>>;
}

export class UserConsentUpdate implements UserConsentUpdateUseCase {

    private repository: UserConsentRepository;

    constructor(_repository: UserConsentRepository) {
        this.repository = _repository;
    }

    invoke(uid: string, data: UpdateUserConsent): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.repository.update(uid, data);
    }
}
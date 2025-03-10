import {PostgrestError} from "@supabase/supabase-js";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface UserCheckConsentUseCase {
    invoke(userId: string): Promise<boolean | PostgrestError>;
}

export class UserCheckConsent implements UserCheckConsentUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<boolean | PostgrestError> {
        return this.repository.checkConsent(userId);
    }
}
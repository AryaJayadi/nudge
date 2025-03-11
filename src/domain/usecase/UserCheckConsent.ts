import {PostgrestError} from "@supabase/supabase-js";
import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

interface UserCheckConsentUseCase {
    invoke(userId: string): Promise<BaseSupabaseResponse<boolean>>;
}

export class UserCheckConsent implements UserCheckConsentUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(userId: string): Promise<BaseSupabaseResponse<boolean>> {
        return this.repository.checkConsent(userId);
    }
}
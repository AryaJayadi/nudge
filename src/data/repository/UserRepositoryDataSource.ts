import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {AuthResponse, PostgrestError, PostgrestResponse} from "@supabase/supabase-js";

export class UserRepositoryDataSource implements UserRepository {
    datasource: UserRepository;

    constructor(_datasource: UserRepository) {
        this.datasource = _datasource;
    }

    signUp(email: string, password: string): Promise<AuthResponse> {
        return this.datasource.signUp(email, password);
    }

    signIn(email: string, password: string): Promise<AuthResponse> {
        return this.datasource.signIn(email, password);
    }

    checkConsent(userId: string): Promise<boolean | PostgrestError> {
        return this.datasource.checkConsent(userId);
    }

    checkSurvey(userId: string): Promise<boolean | PostgrestError> {
        return this.datasource.checkSurvey(userId);
    }
}
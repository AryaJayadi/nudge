import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {AuthResponse} from "@supabase/supabase-js";

export class UserRepositoryDataSource implements UserRepository {
    datasource: UserRepository;

    constructor(_datasource: UserRepository) {
        this.datasource = _datasource;
    }

    signUp(email: string, password: string): Promise<AuthResponse> {
        return this.datasource.signUp(email, password);
    }

}
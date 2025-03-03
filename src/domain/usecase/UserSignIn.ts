import {AuthResponse} from "@supabase/supabase-js";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

export interface UserSignInUseCase {
    invoke: (email: string, password: string) => Promise<AuthResponse>;
}

export class UserSignIn implements UserSignInUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(email: string, password: string): Promise<AuthResponse> {
        return this.repository.signIn(email, password);
    }

}
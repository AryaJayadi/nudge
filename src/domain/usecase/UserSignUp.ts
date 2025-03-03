import {UserRepository} from "@/domain/repository/UserRepository.ts";

export interface UserSignUpUseCase {
    invoke: (email: string, password: string) => Promise<void>;
}

export class UserSignUp implements UserSignUp {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(email: string, password: string): Promise<void> {
        return this.repository.signUp(email, password);
    }
}
import {UserRepository} from "@/domain/repository/UserRepository.ts";

export class UserRepositoryDataSource implements UserRepository {
    datasource: UserRepository;

    constructor(_datasource: UserRepository) {
        this.datasource = _datasource;
    }

    signUp(email: string, password: string): Promise<void> {
        return this.datasource.signUp(email, password);
    }

}
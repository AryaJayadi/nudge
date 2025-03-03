export interface UserRepository {
    signUp(email: string, password: string): Promise<void>;
}
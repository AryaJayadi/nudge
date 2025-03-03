export default interface UserDataSource {
    signUp(email: String, password: string): Promise<void>;
}
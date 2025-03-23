import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentDataSource} from "@/data/datasource/UserConsentDataSource.ts";

export class UserConsentRepositoryDataSource implements UserConsentRepository {
    private datasource: UserConsentDataSource;

    constructor(_datasource: UserConsentDataSource) {
        this.datasource = _datasource;
    }

    create(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.datasource.create(uid);
    }

    read(uid: string): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.datasource.read(uid);
    }

    update(uid: string, data: UpdateUserConsent): Promise<BaseSupabaseResponse<UserConsent>> {
        return this.datasource.update(uid, data);
    }
}
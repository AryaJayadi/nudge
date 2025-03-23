import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserConsentRepository {

    create(uid: string): Promise<BaseSupabaseResponse<UserConsent>>;

    read(uid: string): Promise<BaseSupabaseResponse<UserConsent>>;

    update(uid: string, data: UpdateUserConsent): Promise<BaseSupabaseResponse<UserConsent>>;
}
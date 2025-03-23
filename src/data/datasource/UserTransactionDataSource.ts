import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface UserTransactionDataSource {

    readByUser(uid: string): Promise<BaseSupabaseResponse<UserTransactionWithDetails[]>>;

    create(data: InsertUserTransaction): Promise<BaseSupabaseResponse<UserTransaction>>;
}
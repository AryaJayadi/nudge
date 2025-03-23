import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardDataSource {

    readByCategory(categoryId: number): Promise<BaseSupabaseResponse<Card[]>>;
}
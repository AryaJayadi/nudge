import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardRepository {
    
    readByCategory(categoryId: number): Promise<BaseSupabaseResponse<Card[]>>;
}
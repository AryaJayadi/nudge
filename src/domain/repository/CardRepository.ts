import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardRepository {
    
    read(): Promise<BaseSupabaseResponse<Card[]>>
}
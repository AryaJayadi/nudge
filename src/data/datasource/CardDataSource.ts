import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardDataSource {

    read(): Promise<BaseSupabaseResponse<Card[]>>
}
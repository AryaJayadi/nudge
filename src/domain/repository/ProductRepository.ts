import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface ProductRepository {

    read(): Promise<BaseSupabaseResponse<Product[]>>
}
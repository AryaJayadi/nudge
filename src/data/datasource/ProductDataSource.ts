import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface ProductDataSource {

    read(): Promise<BaseSupabaseResponse<Product[]>>;

    readByCategory(categoryId: number): Promise<BaseSupabaseResponse<Product[]>>;
}
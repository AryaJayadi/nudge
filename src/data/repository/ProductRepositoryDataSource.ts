import {ProductRepository} from "@/domain/repository/ProductRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {ProductDataSource} from "@/data/datasource/ProductDataSource.ts";

export class ProductRepositoryDataSource implements ProductRepository {

    private datasource: ProductDataSource;

    constructor(_datasource: ProductDataSource) {
        this.datasource = _datasource;
    }

    read(): Promise<BaseSupabaseResponse<Product[]>> {
        return this.datasource.read();
    }
}
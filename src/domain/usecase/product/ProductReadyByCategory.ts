import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {ProductRepository} from "@/domain/repository/ProductRepository.ts";

interface ProductReadyByCategoryUseCase {
    invoke(categoryId: number): Promise<BaseSupabaseResponse<Product[]>>;
}

export class ProductReadyByCategory implements ProductReadyByCategoryUseCase {

    private repository: ProductRepository;

    constructor(_repository: ProductRepository) {
        this.repository = _repository;
    }

    invoke(categoryId: number): Promise<BaseSupabaseResponse<Product[]>> {
        return this.repository.readByCategory(categoryId);
    }
}
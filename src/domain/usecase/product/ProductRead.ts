import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {ProductRepository} from "@/domain/repository/ProductRepository.ts";

interface ProductReadUseCase {
    invoke(): Promise<BaseSupabaseResponse<Product[]>>;
}

export class ProductRead implements ProductReadUseCase {

    private repository: ProductRepository;

    constructor(_repository: ProductRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<BaseSupabaseResponse<Product[]>> {
        return this.repository.read();
    }
}
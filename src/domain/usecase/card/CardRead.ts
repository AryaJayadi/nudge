import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardRepository} from "@/domain/repository/CardRepository.ts";

interface CardReadUseCase {
    invoke(categoryId: number): Promise<BaseSupabaseResponse<Card[]>>;
}

export class CardRead implements CardReadUseCase {

    private repository: CardRepository;

    constructor(_repository: CardRepository) {
        this.repository = _repository;
    }

    invoke(categoryId: number): Promise<BaseSupabaseResponse<Card[]>> {
        return this.repository.readByCategory(categoryId);
    }
}
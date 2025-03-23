import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardRepository} from "@/domain/repository/CardRepository.ts";

interface CardReadUseCase {
    invoke(): Promise<BaseSupabaseResponse<Card[]>>;
}

export class CardRead implements CardReadUseCase {

    private repository: CardRepository;

    constructor(_repository: CardRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<BaseSupabaseResponse<Card[]>> {
        return this.repository.read();
    }
}
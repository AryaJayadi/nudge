import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardInteractionRepository} from "@/domain/repository/CardInteractionRepository.ts";

export interface CardInteractionCreateUseCase {
    invoke(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>>;
}

export class CardInteractionCreate implements CardInteractionCreateUseCase {

    private repository: CardInteractionRepository;

    constructor(_repository: CardInteractionRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>> {
        return this.repository.create(data);
    }
}
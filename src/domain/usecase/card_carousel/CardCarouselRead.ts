import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardCarouselRepository} from "@/domain/repository/CardCarouselRepository.ts";

export interface CardCarouselReadUseCase {
    invoke(): Promise<BaseSupabaseResponse<CardCarousel[]>>;
}

export class CardCarouselRead implements CardCarouselReadUseCase {

    private repository: CardCarouselRepository;

    constructor(_repository: CardCarouselRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<BaseSupabaseResponse<CardCarousel[]>> {
        return this.repository.read();
    }
}
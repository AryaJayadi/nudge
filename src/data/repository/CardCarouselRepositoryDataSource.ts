import {CardCarouselRepository} from "@/domain/repository/CardCarouselRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardCarouselDataSource} from "@/data/datasource/CardCarouselDataSource.ts";

export class CardCarouselRepositoryDataSource implements CardCarouselRepository {

    private datasource: CardCarouselDataSource;

    constructor(_datasource: CardCarouselDataSource) {
        this.datasource = _datasource;
    }

    read(): Promise<BaseSupabaseResponse<CardCarousel[]>> {
        return this.datasource.read();
    }
}
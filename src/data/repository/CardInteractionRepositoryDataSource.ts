import {CardInteractionRepository} from "@/domain/repository/CardInteractionRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardInteractionDataSource} from "@/data/datasource/CardInteractionDataSource.ts";

export class CardInteractionRepositoryDataSource implements CardInteractionRepository {

    private datasource: CardInteractionDataSource;

    constructor(_datasource: CardInteractionDataSource) {
        this.datasource = _datasource;
    }

    create(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>> {
        return this.datasource.create(data);
    }
}
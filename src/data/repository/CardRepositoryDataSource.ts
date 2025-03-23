import {CardRepository} from "@/domain/repository/CardRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {CardDataSource} from "@/data/datasource/CardDataSource.ts";

export class CardRepositoryDataSource implements CardRepository {

    private datasource: CardDataSource;

    constructor(_datasource: CardDataSource) {
        this.datasource = _datasource;
    }

    read(): Promise<BaseSupabaseResponse<Card[]>> {
        return this.datasource.read();
    }
}
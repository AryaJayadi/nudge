import {RecommendationRepository} from "@/domain/repository/RecommendationRepository.ts";
import {RecommendationDataSource} from "@/data/datasource/RecommendationDataSource.ts";

export class RecommendationRepositoryDataSource implements RecommendationRepository {

    private datasource: RecommendationDataSource;

    constructor(_dataSource: RecommendationDataSource) {
        this.datasource = _dataSource;
    }

    purchase(uid: string, data: string[]): Promise<string[]> {
        return this.datasource.purchase(uid, data);
    }

    read(uid: string): Promise<Product[]> {
        return this.datasource.read(uid);
    }
}
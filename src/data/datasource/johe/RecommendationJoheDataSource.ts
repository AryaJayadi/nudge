import {RecommendationDataSource} from "@/data/datasource/RecommendationDataSource.ts";

export class RecommendationJoheDataSource implements RecommendationDataSource {

    purchase(uid: string, data: string[]): Promise<string[]> {
        return Promise.resolve([]);
    }

    read(uid: string): Promise<string[]> {
        return Promise.resolve([]);
    }
}
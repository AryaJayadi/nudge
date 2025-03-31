export interface RecommendationDataSource {

    read(uid: string): Promise<string[]>;
    purchase(uid: string, data: string[]): Promise<string[]>;
}
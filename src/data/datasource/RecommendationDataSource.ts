export interface RecommendationDataSource {

    read(uid: string): Promise<Product[]>;
    purchase(uid: string, data: string[]): Promise<string[]>;
}
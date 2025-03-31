export interface RecommendationRepository {

    read(uid: string): Promise<Product[]>;
    purchase(uid: string, data: string[]): Promise<string[]>;
}
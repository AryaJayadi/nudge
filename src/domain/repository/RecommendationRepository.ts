export interface RecommendationRepository {

    read(uid: string): Promise<string[]>;
    purchase(uid: string, data: string[]): Promise<string[]>;
}
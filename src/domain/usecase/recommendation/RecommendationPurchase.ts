import {RecommendationRepository} from "@/domain/repository/RecommendationRepository.ts";

interface RecommendationPurchaseUseCase {
    invoke(uid: string, data: string[]): Promise<string[]>;
}

export class RecommendationPurchase implements RecommendationPurchaseUseCase {

    private repository: RecommendationRepository;

    constructor(_repository: RecommendationRepository) {
        this.repository = _repository;
    }

    invoke(uid: string, data: string[]): Promise<string[]> {
        return this.repository.purchase(uid, data);
    }
}
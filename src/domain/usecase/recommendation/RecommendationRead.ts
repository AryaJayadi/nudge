import {RecommendationRepository} from "@/domain/repository/RecommendationRepository.ts";

interface RecommendationReadUseCase {
    invoke(uid: string): Promise<Product[]>;
}

export class RecommendationRead implements RecommendationReadUseCase {

    private repository: RecommendationRepository;

    constructor(_repository: RecommendationRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<Product[]> {
        return this.repository.read(uid);
    }
}
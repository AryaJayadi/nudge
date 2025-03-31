import {RecommendationRepository} from "@/domain/repository/RecommendationRepository.ts";

interface RecommendationReadUseCase {
    invoke(uid: string): Promise<string[]>;
}

export class RecommendationRead implements RecommendationReadUseCase {

    private repository: RecommendationRepository;

    constructor(_repository: RecommendationRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<string[]> {
        return this.repository.read(uid);
    }
}
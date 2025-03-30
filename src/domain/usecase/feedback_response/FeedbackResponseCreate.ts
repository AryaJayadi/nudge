import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FeedbackResponseRepository} from "@/domain/repository/FeedbackResponseRepository.ts";

interface FeedbackResponseCreateUseCase {
    invoke(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>>;
}

export class FeedbackResponseCreate implements FeedbackResponseCreateUseCase {

    private repository: FeedbackResponseRepository;

    constructor(_repository: FeedbackResponseRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>> {
        return this.repository.create(data);
    }
}
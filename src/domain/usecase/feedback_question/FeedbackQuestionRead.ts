import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FeedbackQuestionRepository} from "@/domain/repository/FeedbackQuestionRepository.ts";

interface FeedbackQuestionReadUseCase {
    invoke(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>>;
}

export class FeedbackQuestionRead implements FeedbackQuestionReadUseCase {

    private repository: FeedbackQuestionRepository;

    constructor(_repository: FeedbackQuestionRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>> {
        return this.repository.read();
    }
}
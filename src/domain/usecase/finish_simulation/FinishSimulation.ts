import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FinishSimulationRepository} from "@/domain/repository/FinishSimulationRepository.ts";
import {FeedbackResponseRepository} from "@/domain/repository/FeedbackResponseRepository.ts";

interface FinishSimulationUseCase {
    invoke(uid: string, responses: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FinishAndResponses>>;
}

export class FinishSimulation implements FinishSimulationUseCase {

    private feedbackResponseRepository: FeedbackResponseRepository;
    private repository: FinishSimulationRepository;

    constructor(_repository: FinishSimulationRepository, _feedbackResponseRepository: FeedbackResponseRepository) {
        this.repository = _repository;
        this.feedbackResponseRepository = _feedbackResponseRepository;
    }

    async invoke(uid: string, responses: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FinishAndResponses>> {
        const resFinish = await this.repository.create({nudge_user_id: uid} as InsertFinishSimulation);

        if (resFinish.error) {
            return {success: false, data: null, error: resFinish.error} as BaseSupabaseResponse<FinishAndResponses>;
        }

        const resFeedback = await this.feedbackResponseRepository.create(responses);

        if (resFeedback.error) {
            return {success: false, data: null, error: resFeedback.error} as BaseSupabaseResponse<FinishAndResponses>;
        }

        return {
            success: true,
            data: {
                ...resFinish.data,
                responses: resFeedback.data
            } as FinishAndResponses,
            error: null
        } as BaseSupabaseResponse<FinishAndResponses>;
    }
}
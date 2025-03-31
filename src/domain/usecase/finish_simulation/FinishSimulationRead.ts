import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FinishSimulationRepository} from "@/domain/repository/FinishSimulationRepository.ts";

export interface FinishSimulationReadUseCase {
    invoke(uid: string): Promise<BaseSupabaseResponse<FinishSimulation>>;
}

export class FinishSimulationRead implements FinishSimulationReadUseCase {

    private repository: FinishSimulationRepository;

    constructor(_repository: FinishSimulationRepository) {
        this.repository = _repository;
    }

    invoke(uid: string): Promise<BaseSupabaseResponse<FinishSimulation>> {
        return this.repository.read(uid);
    }
}
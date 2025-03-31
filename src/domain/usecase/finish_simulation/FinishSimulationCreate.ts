import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FinishSimulationRepository} from "@/domain/repository/FinishSimulationRepository.ts";

interface FinishSimulationCreateUseCase {
    invoke(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>>;
}

export class FinishSimulationCreate implements FinishSimulationCreateUseCase {

    private repository: FinishSimulationRepository;

    constructor(_repository: FinishSimulationRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>> {
        return this.repository.create(data);
    }
}
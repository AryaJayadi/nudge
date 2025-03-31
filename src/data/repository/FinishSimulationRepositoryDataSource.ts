import {FinishSimulationRepository} from "@/domain/repository/FinishSimulationRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FinishSimulationDataSource} from "@/data/datasource/FinishSimulationDataSource.ts";

export class FinishSimulationRepositoryDataSource implements FinishSimulationRepository {

    private datasource: FinishSimulationDataSource;

    constructor(_datasource: FinishSimulationDataSource) {
        this.datasource = _datasource;
    }

    create(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>> {
        return this.datasource.create(data);
    }
}
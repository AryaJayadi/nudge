import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FinishSimulationDataSource {
    create(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>>;
}
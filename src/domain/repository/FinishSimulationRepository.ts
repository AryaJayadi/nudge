import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FinishSimulationRepository {
    create(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>>;
}
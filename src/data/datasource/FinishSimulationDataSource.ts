import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface FinishSimulationDataSource {

    read(uid: string): Promise<BaseSupabaseResponse<FinishSimulation>>;
    create(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>>;
}
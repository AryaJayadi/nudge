import {FinishSimulationDataSource} from "@/data/datasource/FinishSimulationDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {singleSupabaseResponseMapper} from "@/lib/utils.ts";

export class FinishSimulationSupabaseDataSource implements FinishSimulationDataSource {

    private readonly table = supabase.from("nudge_finish_simulation");

    async create(data: InsertFinishSimulation): Promise<BaseSupabaseResponse<FinishSimulation>> {
        const res = await this.table
            .upsert(data)
            .select();

        return singleSupabaseResponseMapper(res);
    }
}
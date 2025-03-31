import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardInteractionDataSource {

    create(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>>;
}
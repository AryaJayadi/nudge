import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardInteractionRepository {

    create(data: InsertCardInteraction): Promise<BaseSupabaseResponse<CardInteraction>>;
}
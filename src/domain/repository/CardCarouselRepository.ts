import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardCarouselRepository {

    read(): Promise<BaseSupabaseResponse<CardCarousel[]>>;
}
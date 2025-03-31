import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export interface CardCarouselDataSource {

    read(): Promise<BaseSupabaseResponse<CardCarousel[]>>;
}
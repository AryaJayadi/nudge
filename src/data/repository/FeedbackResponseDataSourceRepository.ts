import {FeedbackResponseRepository} from "@/domain/repository/FeedbackResponseRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FeedbackResponseDataSource} from "@/data/datasource/FeedbackResponseDataSource.ts";

export class FeedbackResponseDataSourceRepository implements FeedbackResponseRepository {

    private datasource: FeedbackResponseDataSource;

    constructor(_datasource: FeedbackResponseDataSource) {
        this.datasource = _datasource;
    }

    create(data: InsertFeedbackResponse[]): Promise<BaseSupabaseResponse<FeedbackResponse[]>> {
        return this.datasource.create(data);
    }
}
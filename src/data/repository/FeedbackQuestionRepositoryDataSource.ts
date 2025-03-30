import {FeedbackQuestionRepository} from "@/domain/repository/FeedbackQuestionRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {FeedbackQuestionDataSource} from "@/data/datasource/FeedbackQuestionDataSource.ts";

export class FeedbackQuestionRepositoryDataSource implements FeedbackQuestionRepository {

    private datasource: FeedbackQuestionDataSource;

    constructor(_datasource: FeedbackQuestionDataSource) {
        this.datasource = _datasource;
    }

    read(): Promise<BaseSupabaseResponse<FeedbackQuestion[]>> {
        return this.datasource.read();
    }
}
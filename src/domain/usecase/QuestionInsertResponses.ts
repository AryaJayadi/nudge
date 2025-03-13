import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {QuestionRepository} from "@/domain/repository/QuestionRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

interface QuestionInsertResponsesUseCase {
    invoke(data: InsertUserResponseSupabase[]): Promise<BaseSupabaseResponse<UserResponses[]>>;
}

export default class QuestionInsertResponses implements QuestionInsertResponsesUseCase {
    private repository: QuestionRepository;

    constructor(_repository: QuestionRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserResponseSupabase[]): Promise<BaseSupabaseResponse<UserResponses[]>> {
        return this.repository.insertResponses(data);
    }
}
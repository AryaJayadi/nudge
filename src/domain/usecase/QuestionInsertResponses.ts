import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {UserResponses} from "@/core/global.types.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {QuestionRepository} from "@/domain/repository/QuestionRepository.ts";

interface QuestionInsertResponsesUseCase {
    invoke(data: InsertUserResponseSupabase[]): Promise<UserResponses[] | PostgrestError>;
}

export default class QuestionInsertResponses implements QuestionInsertResponsesUseCase {
    private repository: QuestionRepository;

    constructor(_repository: QuestionRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertUserResponseSupabase[]): Promise<UserResponses[] | PostgrestError> {
        return this.repository.insertResponses(data);
    }
}
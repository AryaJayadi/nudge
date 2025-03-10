import {QuestionRepository} from "@/domain/repository/QuestionRepository.ts";
import QuestionDataSource from "@/data/datasource/QuestionDataSource.ts";
import {Question} from "@/domain/model/Question.ts";
import {UserResponses} from "@/core/global.types.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";

export class QuestionRepositoryDataSource implements QuestionRepository{
    private datasource: QuestionDataSource

    constructor(_datasource: QuestionDataSource) {
        this.datasource = _datasource;
    }

    getQuestions(): Promise<Question[]> {
        return this.datasource.getQuestions();
    }

    insertResponses(data: InsertUserResponseSupabase[]): Promise<UserResponses[] | PostgrestError> {
        return this.datasource.insertResponses(data);
    }

}
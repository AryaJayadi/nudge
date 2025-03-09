import {QuestionRepository} from "@/domain/repository/QuestionRepository.ts";
import QuestionDataSource from "@/data/datasource/QuestionDataSource.ts";
import {Question} from "@/domain/model/Question.ts";

export class QuestionRepositoryDataSource implements QuestionRepository{
    private datasource: QuestionDataSource

    constructor(_datasource: QuestionDataSource) {
        this.datasource = _datasource;
    }

    getQuestions(): Promise<Question[]> {
        return this.datasource.getQuestions();
    }

}
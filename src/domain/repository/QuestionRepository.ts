import {Question} from "@/domain/model/Question.ts";

export interface QuestionRepository {

    getQuestions(): Promise<Question[]>;
}
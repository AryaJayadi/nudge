import {Question} from "@/domain/model/Question.ts";

export default interface QuestionDataSource {
    getQuestions() : Promise<Question[]>;
}
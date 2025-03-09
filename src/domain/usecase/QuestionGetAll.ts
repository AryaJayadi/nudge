import {Question} from "@/domain/model/Question.ts";
import {QuestionRepository} from "@/domain/repository/QuestionRepository.ts";

interface QuestionGetAllUseCase {
    invoke(): Promise<Question[]>;
}

export default class QuestionGetAll implements QuestionGetAllUseCase {
    private repository: QuestionRepository;

    constructor(_repository: QuestionRepository) {
        this.repository = _repository;
    }

    invoke(): Promise<Question[]> {
        return this.repository.getQuestions();
    }
}
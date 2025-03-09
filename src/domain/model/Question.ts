import {QuestionType} from "@/domain/model/enum/QuestionType.ts";

export interface Question {
    id: string;
    survey_type_id: string;
    question_text: string;
    question_type: QuestionType;
    options: string[];
    created_at: string;
}
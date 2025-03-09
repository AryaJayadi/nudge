export interface Question {
    id: string;
    survey_type_id: string;
    question_text: string;
    question_type: string;
    options: Record<string, any>;
    created_at: string;
}
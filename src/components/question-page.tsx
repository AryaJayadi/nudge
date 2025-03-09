import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Question} from "@/domain/model/Question.ts";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {QuestionType} from "@/domain/model/enum/QuestionType.ts";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";

interface QuestionPageProps {
    questions: Question[];
    responses: InsertUserResponseSupabase[];
    onAnswerChange: (question: Question, answer: string) => void;
}

export default function QuestionPage({questions, responses, onAnswerChange}: QuestionPageProps) {

    return (
        <div className="space-y-8 pb-4">
            {questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                    <h3 className="font-medium text-lg">
                        {index + 1}. {question.question_text}
                    </h3>
                    {
                        question.question_type === QuestionType.SINGLE ? (
                            <RadioGroup
                                onValueChange={(value) => onAnswerChange(question, value)}
                                className="space-y-2"
                            >
                                <>
                                    {question.options.map((answer, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <RadioGroupItem value={answer} id={answer}/>
                                            <Label htmlFor={answer}>{answer}</Label>
                                        </div>
                                    ))}
                                </>
                            </RadioGroup>
                        ) : (
                            <div className="space-y-2">
                                {question.options.map((answer) => {
                                    const isChecked = responses.some(o => o.question_id === question.id && o.response.includes(answer))

                                    return (
                                        <div key={answer} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`${question.id}-${answer}`}
                                                checked={isChecked}
                                                onCheckedChange={() =>
                                                    onAnswerChange(question, answer)
                                                }
                                            />
                                            <Label htmlFor={`${question.id}-${answer}`}>{answer}</Label>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    )
}


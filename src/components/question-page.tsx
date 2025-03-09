import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {Question} from "@/domain/model/Question.ts";

interface QuestionPageProps {
    questions: Question[]
    answers: Record<string, string>
    onAnswerChange: (questionId: string, answer: string) => void
}

export default function QuestionPage({ questions, answers, onAnswerChange }: QuestionPageProps) {
    return (
        <div className="space-y-8 pb-4">
            {questions.map((o, index) => (
                <div key={o.id} className="space-y-4">
                    <h3 className="font-medium text-lg">
                        {index + 1}. {o.question_text}
                    </h3>
                    <RadioGroup
                        value={answers[o.id] || ""}
                        onValueChange={(value) => onAnswerChange(o.id, value)}
                        className="space-y-2"
                    >
                        <>
                            {o.options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={`${o.id}-${option.value}`} />
                                    <Label htmlFor={`${o.id}-${option.value}`}>{option.label}</Label>
                                </div>
                            ))}
                        </>
                    </RadioGroup>
                </div>
            ))}
        </div>
    )
}


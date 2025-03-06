import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Question } from "@/lib/questions"

interface QuestionPageProps {
    questions: Question[]
    answers: Record<string, string>
    onAnswerChange: (questionId: string, answer: string) => void
}

export default function QuestionPage({ questions, answers, onAnswerChange }: QuestionPageProps) {
    return (
        <div className="space-y-8 pb-4">
            {questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                    <h3 className="font-medium text-lg">
                        {index + 1}. {question.text}
                    </h3>
                    <RadioGroup
                        value={answers[question.id] || ""}
                        onValueChange={(value) => onAnswerChange(question.id, value)}
                        className="space-y-2"
                    >
                        <>
                            {question.options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                                    <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
                                </div>
                            ))}
                        </>
                    </RadioGroup>
                </div>
            ))}
        </div>
    )
}


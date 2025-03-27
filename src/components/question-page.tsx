import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {QuestionType} from "@/domain/model/enum/QuestionType.ts";
import {useQuestionnaire} from "@/presentation/context/QuestionnaireContext.tsx";
import {Question} from "@/domain/model/Question.ts";
import {Input} from "@/components/ui/input.tsx";

interface Props {
    questions: Question[];
}

export default function QuestionPage({questions}: Props) {
    const {
        responses,
        lResponses,
        handleAnswerChange,
        handleLainnyaChange
    } = useQuestionnaire();

    return (
        <div className="space-y-8 pb-4">
            {questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                    <h3 className="font-medium text-lg">
                        {index + 1}. {question.question_text}
                    </h3>
                    {
                        question.question_type === QuestionType.SINGLE ? (
                            <>
                                <RadioGroup
                                    value={responses.find(o => o.question_id === question.id)?.response[0]}
                                    onValueChange={(value) => handleAnswerChange(question, value)}
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
                                {
                                    question.options.some(answer => answer.toLowerCase().includes("lainnya")) &&
                                    responses.find(o => o.question_id === question.id)
                                        ?.response
                                        .some(answer => answer.toLowerCase().includes("lainnya")) && (
                                        <Input
                                            id={question.id + "-lainnya"}
                                            placeholder="Sebutkan"
                                            type="text"
                                            value={lResponses.find(o => o.question_id === question.id)?.response || ""}
                                            onChange={(e) => handleLainnyaChange(question, e.target.value)}
                                        />
                                    )
                                }
                            </>
                        ) : (
                            <div className="space-y-2">
                                {question.options.map((answer) => {
                                    const isChecked = responses.some(o => o.question_id === question.id && o.response.includes(answer))
                                    const isLainnya = isChecked && answer.toLowerCase().includes("lainnya")

                                    return (
                                        <>
                                            <div key={answer} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`${question.id}-${answer}`}
                                                    checked={isChecked}
                                                    onCheckedChange={() =>
                                                        handleAnswerChange(question, answer)
                                                    }
                                                />
                                                <Label htmlFor={`${question.id}-${answer}`}>{answer}</Label>
                                            </div>
                                            {
                                                isLainnya && (
                                                    <Input
                                                        id={question.id + "-lainnya"}
                                                        placeholder="Sebutkan"
                                                        type="text"
                                                        value={lResponses.find(o => o.question_id === question.id)?.response || ""}
                                                        onChange={(e) => handleLainnyaChange(question, e.target.value)}
                                                    />
                                                )
                                            }
                                        </>
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


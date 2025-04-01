import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import useViewModel from "./FeedbackPageViewModel.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import {Input} from "@/components/ui/input.tsx";

export default function FeedbackPage() {
    const {
        questionsData,
        questionsError,
        questionsLoading,
        responses,
        phoneRef,
        lainnyaRef,
        handleRatingChange,
        handleSubmit,
        isComplete
    } = useViewModel();

    if(questionsError || !questionsData) {
        return <div>error</div>
    }

    if(questionsLoading) {
        return <SkeletonCard />
    }

    return (
        <div className="container mx-auto max-w-3xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Feedback Form</CardTitle>
                    <CardDescription>
                        Silakan beri nilai untuk setiap pertanyaan dalam skala 1 hingga 5, di mana 1 adalah yang terendah dan 5 adalah yang tertinggi.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <>
                        {questionsData.map((q, index) => {
                            return index <= 4 ?
                                <div key={index} className="space-y-3">
                                    <div>
                                        <h3 className="font-medium">{q.question}</h3>
                                        {/*<p className="text-sm text-muted-foreground">{q.detail}</p>*/}
                                    </div>
                                    <RadioGroup
                                        value={responses.find(o => o.nudge_feedback_question_id === q.id)?.response}
                                        onValueChange={(value) => handleRatingChange(q.id, parseInt(value))}
                                        className="flex space-x-2"
                                    >
                                        <>
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <div key={value} className="flex flex-col items-center space-y-1">
                                                    <RadioGroupItem value={value.toString()} id={`${q.id}-${value}`}
                                                                    className="peer sr-only"/>
                                                    <Label
                                                        htmlFor={`${q.id}-${value}`}
                                                        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                                                    >
                                                        {value}
                                                    </Label>
                                                    <span
                                                        className="text-xs">{value === 1 ? "Terendah" : value === 5 ? "Tertinggi" : ""}</span>
                                                </div>
                                            ))}
                                        </>
                                    </RadioGroup>
                                </div>
                                :
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="lainnya">{q.question}</Label>
                                    <Input id="lainnya" placeholder={q.question} ref={lainnyaRef} type="text"/>
                                </div>
                        })}
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Phone" ref={phoneRef} type="text"/>
                        </div>
                    </>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSubmit} disabled={!isComplete} className="w-full">
                        Submit Feedback
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}


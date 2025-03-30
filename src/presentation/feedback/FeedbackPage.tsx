import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {useNavigate} from "react-router";

const questions = [
    {
        id: "q1",
        question: "Seberapa menarik perhatian rekomendasi produk yang Anda lihat?",
        description: "(Untuk mengukur apakah nudge terlihat dan noticeable)",
    },
    {
        id: "q2",
        question: "Seberapa sesuai rekomendasi tersebut dengan situasi atau kebutuhan Anda saat itu?",
        description: "(Untuk mengukur personalisasi)",
    },
    {
        id: "q3",
        question: "Seberapa besar pengaruh rekomendasi tersebut terhadap keputusan Anda?",
        description: "(Apakah nudge berhasil menggerakkan user)",
    },
    {
        id: "q4",
        question: "Apakah Anda merasa rekomendasi tersebut membantu Anda memilih dengan lebih percaya diri?",
        description: "(Evaluasi perceived utility dari nudge)",
    },
    {
        id: "q5",
        question: "Seberapa puas Anda dengan pengalaman menerima rekomendasi ini?",
        description: "(Untuk mengukur overall satisfaction terhadap mekanisme nudge)",
    },
]

export default function FeedbackPage() {
    const [ratings, setRatings] = useState<Record<string, string>>({});
    const navigate = useNavigate();

    const handleRatingChange = (questionId: string, value: string) => {
        setRatings((prev) => ({
            ...prev,
            [questionId]: value,
        }))
    }

    const handleSubmit = () => {
        // Here you would typically send the feedback data to your backend
        console.log("Feedback submitted:", ratings)

        // Redirect to a thank you page or back to the home page
        navigate("/app/thankyou")
    }

    const isComplete = Object.keys(ratings).length === questions.length

    return (
        <div className="container mx-auto max-w-3xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Feedback Form</CardTitle>
                    <CardDescription>
                        Please rate each question on a scale from 1 to 5, where 1 is the lowest and 5 is the highest.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <>
                        {questions.map((q) => (
                            <div key={q.id} className="space-y-3">
                                <div>
                                    <h3 className="font-medium">{q.question}</h3>
                                    <p className="text-sm text-muted-foreground">{q.description}</p>
                                </div>
                                <RadioGroup
                                    value={ratings[q.id]}
                                    onValueChange={(value) => handleRatingChange(q.id, value)}
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
                                                    className="text-xs">{value === 1 ? "Lowest" : value === 5 ? "Highest" : ""}</span>
                                            </div>
                                        ))}
                                    </>
                                </RadioGroup>
                            </div>
                        ))}
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


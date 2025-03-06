import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import QuestionPage from "@/components/question-page"
import { questions } from "@/lib/questions"
import { CheckCircle2 } from "lucide-react"
import CustomScrollbar from "@/components/custom-scrollbar"

export default function Questionnaire() {
    const [currentPage, setCurrentPage] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [isComplete, setIsComplete] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const totalPages = 8
    const questionsPerPage = 10
    const progress = ((currentPage + 1) / totalPages) * 100

    const handleAnswerChange = (questionId: string, answer: string) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }))
    }

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1)
            window.scrollTo(0, 0)
        } else {
            setIsComplete(true)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1)
            window.scrollTo(0, 0)
        }
    }

    const handleSubmit = () => {
        // Here you would typically send the answers to your backend
        console.log("Submitting answers:", answers)
        setIsComplete(true)
    }

    const startIndex = currentPage * questionsPerPage
    const endIndex = startIndex + questionsPerPage
    const currentQuestions = questions.slice(startIndex, endIndex)

    if (isComplete) {
        return (
            <Card className="w-full shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Thank You!</CardTitle>
                    <CardDescription className="text-center">Your responses have been submitted successfully.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-10">
                    <CheckCircle2 className="h-24 w-24 text-green-500 mb-4" />
                    <p className="text-center max-w-md">
                        We appreciate your time and input. Your responses will help us improve our services.
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Questionnaire</CardTitle>
                <CardDescription>
                    Page {currentPage + 1} of {totalPages}
                </CardDescription>
                <Progress value={progress} className="h-2 mt-2" />
            </CardHeader>
            <CardContent className="relative flex">
                <div ref={containerRef} className="flex-1 h-[400px] overflow-auto pr-4 scrollbar-hide">
                    <div ref={contentRef}>
                        <QuestionPage questions={currentQuestions} answers={answers} onAnswerChange={handleAnswerChange} />
                    </div>
                </div>
                <CustomScrollbar containerRef={containerRef} contentRef={contentRef} height={400} />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button onClick={currentPage === totalPages - 1 ? handleSubmit : handleNext}>
                    {currentPage === totalPages - 1 ? "Submit" : "Next"}
                </Button>
            </CardFooter>
        </Card>
    )
}


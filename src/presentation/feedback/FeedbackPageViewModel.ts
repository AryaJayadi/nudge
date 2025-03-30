import {useState} from "react";
import {useNavigate} from "react-router";

export default function FeedbackPageViewModel() {
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
    ];

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

    return {
        questions,
        ratings,
        handleRatingChange,
        handleSubmit,
        isComplete
    }
}
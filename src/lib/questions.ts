export interface Option {
    value: string
    label: string
}

export interface Question {
    id: string
    text: string
    options: Option[]
}

// Generate 80 sample questions
const generateQuestions = (): Question[] => {
    const questions: Question[] = []

    for (let i = 1; i <= 80; i++) {
        questions.push({
            id: `q${i}`,
            text: `Sample question ${i}?`,
            options: [
                { value: "strongly_disagree", label: "Strongly Disagree" },
                { value: "disagree", label: "Disagree" },
                { value: "neutral", label: "Neutral" },
                { value: "agree", label: "Agree" },
                { value: "strongly_agree", label: "Strongly Agree" },
            ],
        })
    }

    return questions
}

export const questions = generateQuestions()


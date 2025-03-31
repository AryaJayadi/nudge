import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
    card: Card;
    onCardClick: (card: Card) => void;
}

export default function NudgeRecommendation({card, onCardClick} : Props) {
    return (
        <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-bold">Rekomendasi untuk Anda</CardTitle>
                <AlertCircle className="h-4 w-4" />
            </CardHeader>
            <CardContent className="font-medium">
                <p className="text-sm mb-3">
                    {card.content}
                </p>
                <Button size="sm" className="w-full bg-white hover:bg-blue-100 text-blue-800" onClick={() => onCardClick(card)}>
                    {card.label}
                </Button>
            </CardContent>
        </Card>
    )
}
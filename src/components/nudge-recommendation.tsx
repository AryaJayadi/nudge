import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface Props {
    card: Card;
}

export default function NudgeRecommendation({card} : Props) {
    return (
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rekomendasi untuk Anda</CardTitle>
                <AlertCircle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-3">
                    {card.content}
                </p>
                <Button size="sm" className="w-full bg-white hover:bg-red-100 text-red-600">
                    {card.label}
                </Button>
            </CardContent>
        </Card>
    )
}
import {JSX, useState} from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ChevronUp, AlertCircle } from "lucide-react"

interface ProductCardProps {
    title: string
    description: string
    icon: JSX.Element
    isPopular?: boolean
    primaryInfo: { label: string; value: string }
    secondaryInfo: { label: string; value: string }
    features: string[]
    benefits: string[]
    risks: string[]
    ctaText: string
    onCtaClick: () => void
}

export default function ProductCard({
                                        title,
                                        description,
                                        icon,
                                        isPopular,
                                        primaryInfo,
                                        secondaryInfo,
                                        features,
                                        benefits,
                                        risks,
                                        ctaText,
                                        onCtaClick,
                                    }: ProductCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg font-medium">{title}</CardTitle>
                    {isPopular && <Badge variant="secondary">Terpopuler</Badge>}
                </div>
                {icon}
            </CardHeader>
            <CardContent>
                <CardDescription className="mb-2">{description}</CardDescription>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <p className="text-sm font-semibold">{primaryInfo.label}</p>
                        <p className="text-lg font-bold text-modern-600">{primaryInfo.value}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{secondaryInfo.label}</p>
                        <p className="text-lg font-bold text-modern-600">{secondaryInfo.value}</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full mb-4" onClick={() => setIsExpanded(!isExpanded)}>
                    <>
                        {isExpanded ? "Sembunyikan Detail" : "Lihat Detail"}
                        {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </>
                </Button>
                <>
                    {isExpanded && (
                        <div className="mb-4 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-1">Fitur:</h4>
                                <ul className="list-disc list-inside text-sm">
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Keuntungan:</h4>
                                <ul className="list-disc list-inside text-sm">
                                    {benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1 text-yellow-500" /> Risiko:
                                </h4>
                                <ul className="list-disc list-inside text-sm text-yellow-700">
                                    {risks.map((risk, index) => (
                                        <li key={index}>{risk}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={onCtaClick}>
                    {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    )
}


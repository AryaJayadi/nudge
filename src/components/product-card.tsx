import {JSX, useState} from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ChevronUp, AlertCircle } from "lucide-react"

interface Props {
    product: Product;
    onPurchase: () => void;
}

export default function ProductCard({product, onPurchase}: Props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const features = product.fitur ? product.fitur.split(",") : [];
    const benefits = product.keuntungan ? product.keuntungan.split(",") : [];
    const risks = product.risiko ? product.risiko.split(",") : [];

    return (
        <Card className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg font-medium">{product.product_title}</CardTitle>
                    {product.nudge_info && <Badge variant="secondary">Terpopuler</Badge>}
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="mb-2">{product.content}</CardDescription>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <p className="text-sm font-semibold">Bunga</p>
                        <p className="text-lg font-bold text-blue-600">{product.bunga_potensireturn}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Setoran Minimal</p>
                        <p className="text-lg font-bold text-blue-600">{product.premi_setoran_makspinjam}</p>
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={onPurchase}>
                    {"Beli Produk"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    )
}


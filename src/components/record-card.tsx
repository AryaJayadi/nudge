import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {formatCurrency} from "@/lib/utils.ts";
import {Record} from "@/domain/model/Record.ts";

interface RecordCardProps {
    title: string
    description: string
    profit: number
    price: number
    risk: number
    // record: Record;
    onPurchase: (record: Record, win: boolean) => void;
}

// export default function RecordCard({title, description, profit, price, risk, record, onPurchase}: RecordCardProps) {
export default function RecordCard({title, description, profit, price, risk}: RecordCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    console.log(isModalOpen);

    return (
        <>
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                    <CardTitle className="text-xl font-bold text-blue-800">{title}</CardTitle>
                    <CardDescription className="text-blue-600">{description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Profit</p>
                            <p className="text-2xl font-bold text-green-600">{profit}%</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Risk</p>
                            <p className="text-2xl font-bold text-red-600">{risk}%</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-blue-800">{formatCurrency(price)}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsModalOpen(true)}>
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>

            {/*<SimulationModal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    onClose={() => setIsModalOpen(false)}*/}
            {/*    profit={profit}*/}
            {/*    price={price}*/}
            {/*    risk={risk}*/}
            {/*    record={record}*/}
            {/*    onPurchase={onPurchase}*/}
            {/*/>*/}
        </>
    )
}


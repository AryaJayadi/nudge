import { ArrowRight, ArrowUpRight, ArrowDownLeft, ShoppingCart, CreditCard } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Link} from "react-router";

const transactions = [
    {
        id: "1",
        description: "Transfer ke Budi",
        date: "24 Jun 2023",
        amount: "-Rp 250.000",
        type: "outgoing",
    },
    {
        id: "2",
        description: "Terima dari Sarah",
        date: "22 Jun 2023",
        amount: "+Rp 500.000",
        type: "incoming",
    },
    {
        id: "3",
        description: "Pembayaran Listrik",
        date: "20 Jun 2023",
        amount: "-Rp 350.000",
        type: "bill",
    },
    {
        id: "4",
        description: "Belanja Supermarket",
        date: "18 Jun 2023",
        amount: "-Rp 175.000",
        type: "shopping",
    },
]

const getTransactionIcon = (type: string) => {
    switch (type) {
        case "outgoing":
            return <ArrowUpRight className="h-4 w-4 text-red-500" />
        case "incoming":
            return <ArrowDownLeft className="h-4 w-4 text-green-500" />
        case "shopping":
            return <ShoppingCart className="h-4 w-4 text-blue-500" />
        case "bill":
            return <CreditCard className="h-4 w-4 text-orange-500" />
        default:
            return <CreditCard className="h-4 w-4 text-gray-500" />
    }
}

export default function TransactionHistoryCard() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Transaksi Terakhir</CardTitle>
                <Link to="/app/transaksi">
                    <Button variant="ghost" className="h-8 px-2 text-sm text-primary">
                        Lihat Semua
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                </Link>
            </CardHeader>
            <CardContent className="px-6">
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                                    {getTransactionIcon(transaction.type)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium leading-none">{transaction.description}</p>
                                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                                </div>
                            </div>
                            <div
                                className={`text-sm font-medium ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                            >
                                {transaction.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


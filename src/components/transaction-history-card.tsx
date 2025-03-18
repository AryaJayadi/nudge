import {
    ArrowRight,
    CreditCard,
    PiggyBank,
    TrendingUp,
    Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Link} from "react-router";
import {formatCurrency, formatDate} from "@/lib/utils.ts";

const getTransactionIcon = (categoryId: number | null) => {
    switch (categoryId) {
        case 1:
            return <PiggyBank className="h-4 w-4" />
        case 2:
            return <CreditCard className="h-4 w-4" />
        case 3:
            return <TrendingUp className="h-4 w-4" />
        case 4:
            return <Shield className="h-4 w-4" />
        default:
            return <div></div>
    }
}

interface Props {
    transactions: TransactionHistoryWithDetails[];
}

export const TransactionHistoryCard = ({transactions}: Props) => {

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
                    {Array.from({ length: 4 }).map((_, index) => {
                        const transaction = transactions[index];

                        if(index >= transactions.length) return <TransactionSkeleton />

                        return (
                            <div key={transaction.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                                        {getTransactionIcon(transaction.records.category_id)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium leading-none">{transaction.records.record_title}</p>
                                        <p className="text-xs text-muted-foreground">{formatDate(transaction.created_at)}</p>
                                    </div>
                                </div>
                                <div
                                    className={`text-sm font-medium ${transaction.win ? "text-green-600" : "text-red-600"}`}
                                >
                                    {formatCurrency(1000000)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    )
}

const TransactionSkeleton = () => (
    <div className="flex items-center justify-between animate-pulse">
        <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-full bg-muted"></div>
            <div>
                <div className="h-4 w-24 bg-muted rounded mb-2"></div>
                <div className="h-3 w-16 bg-muted rounded"></div>
            </div>
        </div>
        <div className="h-4 w-16 bg-muted rounded"></div>
    </div>
)
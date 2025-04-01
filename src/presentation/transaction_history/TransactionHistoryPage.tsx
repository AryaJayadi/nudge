import useViewModel from "./TransactionHistoryPageViewModel.tsx"
import {CreditCard, PiggyBank, Shield, TrendingUp} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {formatCurrency, formatDate} from "@/lib/utils.ts";

export const TransactionHistoryPage = () => {
    const {
        transactions
    } = useViewModel();

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

    return (
        <div className="max-w-md mx-auto">

            <div className="space-y-3">
                {transactions.map((transaction) => (
                    <Card key={transaction.id} className="shadow-sm">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div
                                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-2">
                                        {getTransactionIcon(transaction.nudge_product.nudge_category_id)}
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">{transaction.nudge_product.product_title}</div>
                                        <div className="text-xs text-muted-foreground">{formatDate(transaction.created_at)}</div>
                                    </div>
                                </div>
                                <div
                                    className={`text-sm font-medium ${transaction.win ? "text-green-600" : "text-red-600"}`}>
                                    {`${formatCurrency(transaction.price)}`}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
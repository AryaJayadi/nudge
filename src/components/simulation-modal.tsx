import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button"
import {useEffect, useRef, useState} from "react"
import {AlertCircle, CheckCircle2, XCircle} from "lucide-react"
import {Label} from "@/components/ui/label.tsx";
import {NumberSpinner} from "@/components/number-spinner.tsx";

interface SimulationModalProps {
    isOpen: boolean;
    onClose: () => void;
    profit: string;
    price: string;
    risk: number;
    riskLevel: string;
    product: Product;
    onPurchase(product: Product, amount: number, win: boolean): void;
}

export function SimulationModal({isOpen, onClose, profit, price, risk, riskLevel, product, onPurchase}: SimulationModalProps) {
    const [isSimulating, setIsSimulating] = useState(false)
    const [currentNumber, setCurrentNumber] = useState<number | null>(null)
    const [result, setResult] = useState<"win" | "lose" | null>()
    const [finalNumber, setFinalNumber] = useState<number | null>(null)
    const [amount, setAmount] = useState<number>(product.saldo_awal)
    const simulationTimerRef = useRef<NodeJS.Timeout | null>(null)

    const MIN_AMOUNT = product.saldo_awal;
    const MAX_AMOUNT = 10  * product.saldo_awal;
    const STEP = product.saldo_awal;

    // const formatCurrency = (amount: number) => {
    //     return new Intl.NumberFormat("id-ID", {
    //         style: "currency",
    //         currency: "IDR",
    //         minimumFractionDigits: 0,
    //         maximumFractionDigits: 0,
    //     }).format(amount)
    // }

    const startSimulation = () => {
        setIsSimulating(true)
        setResult(null)
        setFinalNumber(null)

        // Generate random numbers for 3 seconds
        let duration = 0
        const interval = 50 // ms between updates
        const maxDuration = 3000 // 3 seconds

        const updateNumber = () => {
            const randomNum = Math.floor(Math.random() * 100) + 1
            setCurrentNumber(randomNum)

            duration += interval
            if (duration < maxDuration) {
                simulationTimerRef.current = setTimeout(updateNumber, interval)
            } else {
                // Simulation complete, determine result
                const finalRandomNumber = Math.floor(Math.random() * 100) + 1
                setCurrentNumber(finalRandomNumber)
                setFinalNumber(finalRandomNumber)

                // If the final number is greater than the risk percentage, user wins
                // Example: If risk is 30%, numbers 31-100 are wins, 1-30 are losses
                if (finalRandomNumber > risk) {
                    setResult("win")
                } else {
                    setResult("lose")
                }

                setIsSimulating(false)
            }
        }

        updateNumber()
    }

    // Clean up timers on unmount or when modal closes
    useEffect(() => {
        return () => {
            if (simulationTimerRef.current) {
                clearTimeout(simulationTimerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal closes
            setIsSimulating(false)
            setCurrentNumber(null)
            setResult(null)
            setFinalNumber(null)

            if (simulationTimerRef.current) {
                clearTimeout(simulationTimerRef.current)
            }
        }
    }, [isOpen])

    useEffect(() => {
        if (result === "win") {
            onPurchase(product, amount / product.saldo_awal, true)
        } else if (result === "lose") {
            onPurchase(product, amount / product.saldo_awal, false)
        }
    }, [result]);

    return (
        <Dialog open={isOpen} onOpenChange={isSimulating ? undefined : onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Investment Simulation</DialogTitle>
                    <DialogDescription>
                        Simulate your investment to see if you win or lose based on the risk factor.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Profit</p>
                            <p className="text-xl font-bold text-green-600">{profit}%</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Risk</p>
                            <p className="text-xl font-bold text-red-600">{riskLevel}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Price</p>
                            <p className="text-xl font-bold text-blue-800">{price}</p>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="constrained-spinner" className="text-sm font-medium text-gray-500">Amount</Label>
                            <NumberSpinner value={amount} onChange={setAmount} min={MIN_AMOUNT} max={MAX_AMOUNT} step={STEP} defaultValue={MIN_AMOUNT} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6">
                        {currentNumber !== null && (
                            <div className="text-5xl font-bold mb-4 relative">
                <span className={`transition-all duration-100 ${isSimulating ? "scale-110" : ""}`}>
                  {currentNumber}
                </span>
                            </div>
                        )}

                        {result && (
                            <div
                                className={`mt-4 flex flex-col items-center ${result === "win" ? "text-green-600" : "text-red-600"}`}
                            >
                                {result === "win" ? (
                                    <>
                                        <CheckCircle2 className="h-12 w-12 mb-2"/>
                                        <p className="text-xl font-bold">You Win!</p>
                                        <p className="text-sm">
                                            Number {finalNumber} is greater than risk ({risk}%)
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="h-12 w-12 mb-2"/>
                                        <p className="text-xl font-bold">You Lose!</p>
                                        <p className="text-sm">
                                            Number {finalNumber} is within risk range (1-{risk}%)
                                        </p>
                                    </>
                                )}
                            </div>
                        )}

                        {!currentNumber && !isSimulating && !result && (
                            <div className="text-center text-gray-500 flex items-center">
                                <AlertCircle className="mr-2 h-5 w-5"/>
                                <span>Click simulate to start</span>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter className="sm:justify-between">
                    <Button variant="outline" onClick={onClose} disabled={isSimulating}>
                        {result ? "Close" : "Cancel"}
                    </Button>
                    {!isSimulating && !result && (
                        <Button onClick={startSimulation} className="bg-blue-600 hover:bg-blue-700">
                            Simulate
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


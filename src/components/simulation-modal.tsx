import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface SimulationModalProps {
    isOpen: boolean
    onClose: () => void
    profit: number
    price: number
    risk: number
}

export function SimulationModal({ isOpen, onClose, profit, price, risk }: SimulationModalProps) {
    const [isSimulating, setIsSimulating] = useState(false)
    const [currentNumber, setCurrentNumber] = useState<number | null>(null)
    const [result, setResult] = useState<"win" | "lose" | null>(null)
    const [finalNumber, setFinalNumber] = useState<number | null>(null)
    const [closeCountdown, setCloseCountdown] = useState<number | null>(null)
    const simulationTimerRef = useRef<NodeJS.Timeout | null>(null)
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const startSimulation = () => {
        setIsSimulating(true)
        setResult(null)
        setFinalNumber(null)
        setCloseCountdown(null)

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

                // Start the 5-second countdown to auto-close
                startCloseCountdown()
            }
        }

        updateNumber()
    }

    const startCloseCountdown = () => {
        // Start at 5 seconds
        setCloseCountdown(5)

        // Update countdown every second
        const countdownInterval = setInterval(() => {
            setCloseCountdown((prev) => {
                if (prev === null || prev <= 1) {
                    clearInterval(countdownInterval)
                    // Close the modal when countdown reaches 0
                    closeTimerRef.current = setTimeout(() => {
                        onClose()
                    }, 1000)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        // Clean up interval if component unmounts
        return () => {
            clearInterval(countdownInterval)
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
            }
        }
    }

    // Clean up timers on unmount or when modal closes
    useEffect(() => {
        return () => {
            if (simulationTimerRef.current) {
                clearTimeout(simulationTimerRef.current)
            }
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
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
            setCloseCountdown(null)

            if (simulationTimerRef.current) {
                clearTimeout(simulationTimerRef.current)
            }
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
            }
        }
    }, [isOpen])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
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
                            <p className="text-xl font-bold text-red-600">{risk}%</p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500">Price</p>
                        <p className="text-xl font-bold text-blue-800">{formatCurrency(price)}</p>
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
                                        <CheckCircle2 className="h-12 w-12 mb-2" />
                                        <p className="text-xl font-bold">You Win!</p>
                                        <p className="text-sm">
                                            Number {finalNumber} is greater than risk ({risk}%)
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="h-12 w-12 mb-2" />
                                        <p className="text-xl font-bold">You Lose!</p>
                                        <p className="text-sm">
                                            Number {finalNumber} is within risk range (1-{risk}%)
                                        </p>
                                    </>
                                )}

                                {closeCountdown !== null && (
                                    <div className="mt-6 flex flex-col items-center">
                                        <div className="relative h-16 w-16">
                                            {/* Circular countdown animation */}
                                            <svg className="h-full w-full" viewBox="0 0 100 100">
                                                <circle
                                                    className="text-gray-200"
                                                    strokeWidth="8"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="42"
                                                    cx="50"
                                                    cy="50"
                                                />
                                                <circle
                                                    className={`${result === "win" ? "text-green-600" : "text-red-600"} transition-all duration-1000 ease-linear`}
                                                    strokeWidth="8"
                                                    strokeDasharray={264}
                                                    strokeDashoffset={264 * (1 - closeCountdown / 5)}
                                                    strokeLinecap="round"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="42"
                                                    cx="50"
                                                    cy="50"
                                                />
                                            </svg>
                                            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                                                <span className="text-2xl font-medium">{closeCountdown}</span>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Closing in {closeCountdown} seconds</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {!currentNumber && !isSimulating && !result && (
                            <div className="text-center text-gray-500 flex items-center">
                                <AlertCircle className="mr-2 h-5 w-5" />
                                <span>Click simulate to start</span>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter className="sm:justify-between">
                    {!isSimulating && !result && (
                        <>
                            <Button variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button onClick={startSimulation} className="bg-blue-600 hover:bg-blue-700">
                                Simulate
                            </Button>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
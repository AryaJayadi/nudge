import { useState, useEffect, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ChevronUp, ChevronDown } from "lucide-react"

interface NumberSpinnerProps {
    value?: number
    defaultValue: number
    min: number
    max: number
    step?: number
    disabled?: boolean
    onChange?: (value: number) => void
    className?: string
    inputClassName?: string
}

export function NumberSpinner({
                                  value,
                                  defaultValue,
                                  min,
                                  max,
                                  step = 1,
                                  disabled = false,
                                  onChange,
                                  className,
                                  inputClassName,
                              }: NumberSpinnerProps) {
    const [internalValue, setInternalValue] = useState<number>(value ?? defaultValue)

    // Update internal value when controlled value changes
    useEffect(() => {
        if (value !== undefined) {
            setInternalValue(value)
        }
    }, [value])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value === "" ? 0 : Number.parseFloat(e.target.value)

        if (!isNaN(newValue)) {
            updateValue(newValue)
        }
    }

    const increment = () => {
        updateValue(internalValue + step)
    }

    const decrement = () => {
        updateValue(internalValue - step)
    }

    const updateValue = (newValue: number) => {
        // Constrain value between min and max
        const constrainedValue = Math.min(Math.max(newValue, min), max)

        if (value === undefined) {
            setInternalValue(constrainedValue)
        }

        onChange?.(constrainedValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            e.preventDefault()
            increment()
        } else if (e.key === "ArrowDown") {
            e.preventDefault()
            decrement()
        }
    }

    return (
        <div className={cn("flex items-center", className)}>
            <div className="relative flex items-center">
                <Input
                    type="number"
                    value={internalValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    className={cn("pr-10", inputClassName)}
                    aria-label="Number input"
                />
                <div className="absolute right-0 top-0 flex h-full flex-col">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-1/2 rounded-none rounded-tr-md px-2 py-0"
                        onClick={increment}
                        disabled={disabled || internalValue >= max}
                        tabIndex={-1}
                        aria-label="Increment"
                    >
                        <ChevronUp className="h-3 w-3" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-1/2 rounded-none rounded-br-md px-2 py-0"
                        onClick={decrement}
                        disabled={disabled || internalValue <= min}
                        tabIndex={-1}
                        aria-label="Decrement"
                    >
                        <ChevronDown className="h-3 w-3" />
                    </Button>
                </div>
            </div>
        </div>
    )
}


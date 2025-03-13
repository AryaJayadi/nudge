import {useEffect, useState, useRef, type RefObject} from "react"
import {cn} from "@/lib/utils"

interface CustomScrollbarProps {
    containerRef: RefObject<HTMLDivElement | null>;
    contentRef: RefObject<HTMLDivElement | null>;
    height: number;
    className?: string;
}

export default function CustomScrollbar({containerRef, contentRef, height, className}: CustomScrollbarProps) {
    const [thumbHeight, setThumbHeight] = useState(30)
    const [scrollPercentage, setScrollPercentage] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [startScrollPercentage, setStartScrollPercentage] = useState(0)
    const trackRef = useRef<HTMLDivElement | null>(null)

    // Calculate thumb height based on content
    useEffect(() => {
        const calculateThumbHeight = () => {
            if (!containerRef.current || !contentRef.current) return

            const containerHeight = containerRef.current.clientHeight
            const contentHeight = contentRef.current.scrollHeight

            const ratio = containerHeight / contentHeight
            const calculatedThumbHeight = Math.max(30, ratio * height)

            setThumbHeight(calculatedThumbHeight)
        }

        calculateThumbHeight()

        // Add resize observer to recalculate when content changes
        const resizeObserver = new ResizeObserver(calculateThumbHeight)
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current)
        }

        return () => {
            if (contentRef.current) {
                resizeObserver.disconnect()
            }
        }
    }, [containerRef, contentRef, height])

    // Update scroll position when container is scrolled
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !contentRef.current) return

            const containerHeight = containerRef.current.clientHeight
            const contentHeight = contentRef.current.scrollHeight
            const scrollTop = containerRef.current.scrollTop

            const percentage = scrollTop / (contentHeight - containerHeight)
            setScrollPercentage(percentage)
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll)
            }
        }
    }, [containerRef, contentRef])

    // Handle mouse events for dragging
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !trackRef.current || !containerRef.current || !contentRef.current) return

            // const trackRect = trackRef.current.getBoundingClientRect()
            const deltaY = e.clientY - startY
            const deltaPercentage = deltaY / (height - thumbHeight)

            const newPercentage = Math.max(0, Math.min(1, startScrollPercentage + deltaPercentage))

            const containerHeight = containerRef.current.clientHeight
            const contentHeight = contentRef.current.scrollHeight

            containerRef.current.scrollTop = newPercentage * (contentHeight - containerHeight)
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging, startY, startScrollPercentage, height, thumbHeight, containerRef, contentRef])

    // Handle click on track to jump to position
    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!trackRef.current || !containerRef.current || !contentRef.current) return

        // Ignore if clicking on thumb
        if (e.target !== trackRef.current) return

        const trackRect = trackRef.current.getBoundingClientRect()
        const clickPosition = e.clientY - trackRect.top

        const percentage = clickPosition / height

        const containerHeight = containerRef.current.clientHeight
        const contentHeight = contentRef.current.scrollHeight

        containerRef.current.scrollTop = percentage * (contentHeight - containerHeight)
    }

    // Start dragging the thumb
    const handleThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
        setStartY(e.clientY)
        setStartScrollPercentage(scrollPercentage)
    }

    return (
        <div
            ref={trackRef}
            className={cn("w-2 bg-gray-100 dark:bg-gray-800 rounded-full relative cursor-pointer", className)}
            style={{height: `${height}px`}}
            onClick={handleTrackClick}
        >
            <div
                className="absolute w-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-full cursor-pointer"
                style={{
                    height: `${thumbHeight}px`,
                    top: `${scrollPercentage * (height - thumbHeight)}px`,
                }}
                onMouseDown={handleThumbMouseDown}
            />
        </div>
    )
}


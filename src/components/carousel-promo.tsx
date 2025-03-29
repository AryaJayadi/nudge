import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import {useState, useEffect} from "react"
import SkeletonCard from "@/components/skeleton-card.tsx";
import NudgeRecommendation from "@/components/nudge-recommendation.tsx";

interface Props {
    cards: Card[];
}

export default function PromoCarousel({cards}: Props) {
    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

    const product = cards[current];

    useEffect(() => {
        if (!api) {
            return
        }

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }

        api.on("select", handleSelect)
        api.on("reInit", handleSelect)

        return () => {
            api.off("select", handleSelect)
            api.off("reInit", handleSelect)
        }
    }, [api])

    if (!product) return (
        <SkeletonCard/>
    )

    return (
        <div className="w-full max-w-md mx-auto">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
                setApi={setApi}
            >
                <CarouselContent>
                    <>
                        {cards.map((item, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <NudgeRecommendation key={index} card={item}/>
                            </CarouselItem>
                        ))}
                    </>
                </CarouselContent>
            </Carousel>

            {/* Index indicators */}
            <div className="flex justify-center gap-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-muted"}`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import {useState, useEffect} from "react"

export default function CardCarousel() {
    const items = [
        {
            title: "Card 1",
            content: "This is the first card with some sample content.",
            interest: "5.2%",
            minimumPrice: "$199",
        },
        {
            title: "Card 2",
            content: "Here's the second card with different content.",
            interest: "4.8%",
            minimumPrice: "$249",
        },
        {
            title: "Card 3",
            content: "The third card contains unique information.",
            interest: "6.1%",
            minimumPrice: "$179",
        },
        {
            title: "Card 4",
            content: "Card number four has its own special content.",
            interest: "5.5%",
            minimumPrice: "$299",
        },
        {
            title: "Card 5",
            content: "And finally, the fifth card rounds out our carousel.",
            interest: "4.9%",
            minimumPrice: "$219",
        },
    ]

    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

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
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    <Card className="border-2 h-full">
                                        <CardContent className="flex flex-col items-start justify-between p-6 h-full">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground mb-3">{item.content}</p>
                                                <div className="grid grid-cols-2 gap-2 mt-2">
                                                    <div className="bg-muted/30 p-2 rounded-md">
                                                        <p className="text-xs text-muted-foreground">Interest</p>
                                                        <p className="font-medium">{item.interest}</p>
                                                    </div>
                                                    <div className="bg-muted/30 p-2 rounded-md">
                                                        <p className="text-xs text-muted-foreground">Min. Price</p>
                                                        <p className="font-medium">{item.minimumPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full pt-4">
                                                <Button className="w-full">Buy Now</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </>
                </CarouselContent>
            </Carousel>

            {/* Index indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, index) => (
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
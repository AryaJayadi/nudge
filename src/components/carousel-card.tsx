import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import {useState, useEffect} from "react"
import {SimulationModal} from "@/components/simulation-modal.tsx";
import SkeletonCard from "@/components/skeleton-card.tsx";
import ProductCard from "@/components/product-card.tsx";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    products: Product[];
    onPurchase: (product: Product, amount: number, win: boolean) => void;
}

export default function CardCarousel({products, onPurchase}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

    const product = products[current];

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

    if(!product) return (
        <SkeletonCard />
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
                        {products.map((_, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    {/*<ProductCard product={product} onPurchase={onPurchase} buyText={"Beli Produk"} />*/}

                                    <Card className="border-2 h-full min-h-56 max-h-56">
                                        <CardContent className="flex flex-col items-start justify-between p-6 h-full">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{product.product_title}</h3>
                                                <p className="text-muted-foreground mb-3">{product.content}</p>
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
            <div className="flex justify-center gap-2">
                {products.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-muted"}`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <SimulationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                profit={String(Math.round(product.profit * 100))}
                price={product.premi_setoran_makspinjam}
                risk={product.weight_risk * 100}
                riskLevel={product.risklevel}
                product={product}
                onPurchase={onPurchase}
            />
        </div>
    )
}
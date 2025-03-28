import useViewModel from "@/presentation/product/ProductPageViewModel.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import ProductCard from "@/components/product-card.tsx";
import NudgeRecommendation from "@/components/nudge-recommendation.tsx";

interface Props {
    categoryId: number;
}

export const ProductPage = ({categoryId}: Props) => {
    const {
        products,
        productsError,
        productsLoading,
        cards,
        onPurchase
    } = useViewModel(categoryId);

    const length = 4;

    if (productsError) {
        return (
            <div>Error</div>
        )
    }

    if (productsLoading) {
        Array.from({length: length}).map((_, i) => (
            <SkeletonCard key={i}/>
        ))
    }

    return (
        <>
            {
                cards &&
                cards.map((o, index) => (
                    <NudgeRecommendation key={index} card={o}/>
                ))
            }
            {
                products &&
                products.map((o, index) => (
                    <ProductCard key={index} product={o} onPurchase={onPurchase}/>
                ))
            }
        </>
    )
}
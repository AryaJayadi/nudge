import useViewModel from "@/presentation/product/ProductPageViewModel.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import ProductCard from "@/components/product-card.tsx";
import NudgeRecommendation from "@/components/nudge-recommendation.tsx";
import CardCarousel from "@/components/carousel-card.tsx";
import PromoCarousel from "@/components/carousel-promo.tsx";

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

    if (productsError || !products || !cards) {
        return (
            <div>Error</div>
        )
    }

    function getBuyText(categoryId: number) {
        switch (categoryId) {
            case 1:
                return "Buka Sekarang";
            case 2:
                return "Ajukan Sekarang";
            case 3:
                return "Investasi Sekarang";
            case 4:
                return "Pilih Rencanamu";
            default:
                return "";
        }
    }

    if (productsLoading) {
        Array.from({length: length}).map((_, i) => (
            <SkeletonCard key={i}/>
        ))
    }

    return (
        <>
            <CardCarousel products={products} onPurchase={onPurchase}/>
            {
                products &&
                products.map((o, index) => (
                    <ProductCard key={index} product={o} onPurchase={onPurchase} buyText={getBuyText(categoryId)}/>
                ))
            }
            {
                cards &&
                cards.map((o, index) => (
                    <NudgeRecommendation key={index} card={o}/>
                ))
            }
        </>
    )
}
import {PiggyBank} from "lucide-react";
import ProductCard from "@/components/product-card.tsx";
import useViewModel from "@/presentation/product/ProductPageViewModel.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import RecordCard from "@/components/record-card.tsx";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const AsuransiPage = () => {

    return (
        <>
            <ProductPage category={RecordCategory.INSURANCE} />
        </>
    )
}
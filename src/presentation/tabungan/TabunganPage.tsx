import ProductCard from "@/components/product-card.tsx";
import {PiggyBank} from "lucide-react";
import useViewModel from "./TabunganPageViewModel.ts"
import SkeletonCard from "@/components/skeleton-card.tsx";

export const TabunganPage = () => {
    const {
        loading,
        records
    } = useViewModel();

    const length = 4;

    return (
        <>
            {
                loading ?
                    Array.from({length: length}).map((_, i) => (
                        <SkeletonCard/>
                    )) :
                    records.map((o, index) => (
                        <ProductCard
                            key={index}
                            title={o.record_title}
                            description={o.record_description}
                            icon={<PiggyBank className="h-6 w-6"/>}
                            isPopular={true}
                            primaryInfo={{label: "Bunga", value: "2,5% p.a."}}
                            secondaryInfo={{label: "Setoran Minimal", value: "Rp 50.000"}}
                            features={["test1", "test2", "test3"]}
                            benefits={["test1", "test2", "test3"]}
                            risks={["test1", "test2", "test3"]}
                            ctaText="Buka Sekarang"
                            onCtaClick={() => console.log(`Buka ${o.record_title}`)}
                        />
                    ))}
        </>
    )
}
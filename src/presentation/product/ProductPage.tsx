import useViewModel from "@/presentation/product/ProductPageViewModel.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import RecordCard from "@/components/record-card.tsx";
import ProductCard from "@/components/product-card.tsx";
import {PiggyBank} from "lucide-react";

interface Props {
    category: RecordCategory;
}

export const ProductPage = ({category}: Props) => {
    const {
        records,
        recordsError,
        recordsLoading,
        onPurchase
    } = useViewModel(category);

    const length = 4;

    if (recordsError) {
        return (
            <div>Error</div>
        )
    }

    if (recordsLoading) {
        Array.from({length: length}).map((_, i) => (
            <SkeletonCard key={i}/>
        ))
    }

    return (
        <>
            {
                records &&
                records.map((o, index) => (
                    <>
                        <RecordCard
                            title={o.record_title}
                            description={o.record_description}
                            profit={12.5}
                            price={5000000}
                            risk={30}
                            record={o}
                            onPurchase={onPurchase}
                        />
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
                    </>
                ))}
        </>
    )
}
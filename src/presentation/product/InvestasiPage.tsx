import {BarChart3, Building2, Coins, DollarSign, Landmark, PiggyBank} from "lucide-react";
import ProductCard from "@/components/product-card.tsx";
import useViewModel from "@/presentation/product/ProductPageViewModel.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import SkeletonCard from "@/components/skeleton-card.tsx";
import RecordCard from "@/components/record-card.tsx";

export const InvestasiPage = () => {
    const {
        loading,
        records
    } = useViewModel(RecordCategory.INVESTMENT);

    const length = 4;

    return (
        <>
            {
                loading ?
                    Array.from({length: length}).map((_, i) => (
                        <SkeletonCard/>
                    )) :
                    records.map((o, index) => (
                        <>
                            <RecordCard
                                title={o.record_title}
                                description={o.record_description}
                                profit={12.5}
                                price={5000000}
                                risk={30}
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
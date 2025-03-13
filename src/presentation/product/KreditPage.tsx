import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const KreditPage = () => {

    return (
        <>
            <ProductPage category={RecordCategory.LOAN} />
        </>
    )
}
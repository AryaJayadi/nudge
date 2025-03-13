import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const AsuransiPage = () => {

    return (
        <>
            <ProductPage category={RecordCategory.INSURANCE} />
        </>
    )
}
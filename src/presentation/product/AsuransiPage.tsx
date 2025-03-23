import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const AsuransiPage = () => {

    return (
        <>
            <ProductPage categoryId={RecordCategory.INSURANCE} />
        </>
    )
}
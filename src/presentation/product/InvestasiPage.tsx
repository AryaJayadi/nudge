import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const InvestasiPage = () => {

    return (
        <>
            <ProductPage categoryId={RecordCategory.INVESTMENT} />
        </>
    )
}
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const TabunganPage = () => {

    return (
        <>
            <ProductPage categoryId={RecordCategory.SAVING} />
        </>
    )
}
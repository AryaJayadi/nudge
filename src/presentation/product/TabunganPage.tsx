import useViewModel from "./ProductPageViewModel.ts"
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {ProductPage} from "@/presentation/product/ProductPage.tsx";

export const TabunganPage = () => {

    return (
        <>
            <ProductPage category={RecordCategory.SAVING} />
        </>
    )
}
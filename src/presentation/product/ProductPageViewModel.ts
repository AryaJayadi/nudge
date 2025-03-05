import {useCallback, useEffect, useMemo, useState} from "react";
import {Record} from "@/domain/model/Record.ts";
import RecordSupabaseDataSource from "@/data/datasource/supabase/RecordSupabaseDataSource.ts";
import {RecordRepositoryDataSource} from "@/data/repository/RecordRepositoryDataSource.ts";
import {RecordGetByCategory} from "@/domain/usecase/RecordGetByCategory.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {useUser} from "@/presentation/context/UserContext.tsx";

export default function ProductPageViewModel(category: RecordCategory) {
    const [records, setRecords] = useState<Record[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {incBalance} = useUser();

    const recordDataSource = useMemo(() => new RecordSupabaseDataSource(), []);
    const recordRepository = useMemo(() => new RecordRepositoryDataSource(recordDataSource), [recordDataSource]);

    const recordGetByCategoryUseCase = useMemo(() => new RecordGetByCategory(recordRepository), [recordRepository]);

    const recordGetByCategory = useCallback(async () => {
        return await recordGetByCategoryUseCase.invoke(category)
    }, [recordGetByCategoryUseCase])

    function onPurchaseWin(amount: number, profit: number) {
        const res = amount * (profit / 100);
        incBalance(res);
    }

    function onPurchaseLose(amount: number) {
        incBalance(-amount);
    }

    useEffect(() => {
        if(loading) {
            recordGetByCategory().then((res) => {
                setRecords(res);
                setLoading(false);
            })
        }
    }, [loading]);

    return {
        loading,
        records,
        onPurchaseWin,
        onPurchaseLose
    }
}
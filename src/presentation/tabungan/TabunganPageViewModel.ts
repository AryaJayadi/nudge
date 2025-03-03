import {useCallback, useEffect, useMemo, useState} from "react";
import {Record} from "@/domain/model/Record.ts";
import RecordSupabaseDataSource from "@/data/datasource/supabase/RecordSupabaseDataSource.ts";
import {RecordRepositoryDataSource} from "@/data/repository/RecordRepositoryDataSource.ts";
import {RecordGetByCategory} from "@/domain/usecase/RecordGetByCategory.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";

export default function TabunganPageViewModel() {
    const [records, setRecords] = useState<Record[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const recordDataSource = useMemo(() => new RecordSupabaseDataSource(), []);
    const recordRepository = useMemo(() => new RecordRepositoryDataSource(recordDataSource), [recordDataSource]);

    const recordGetByCategoryUseCase = useMemo(() => new RecordGetByCategory(recordRepository), [recordRepository]);

    const recordGetByCategory = useCallback(async () => {
        return await recordGetByCategoryUseCase.invoke(RecordCategory.SAVING)
    }, [recordGetByCategoryUseCase])

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
        records
    }
}
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {useCallback, useEffect, useState} from "react";
import {PostgrestError} from "@supabase/supabase-js";

export function useSupabaseQuery<T>(
    queryFn: () => Promise<BaseSupabaseResponse<T>>
) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<PostgrestError | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const response = await queryFn();

        if (response.success) {
            setData(response.data);
            setError(null);
        } else {
            setError(response.error);
            setData(null);
        }

        setLoading(false);
    }, [queryFn]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, loading, refetch: fetchData };
}
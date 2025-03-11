import {PostgrestError} from "@supabase/supabase-js";

export type BaseSupabaseResponse<T> = {
    success: boolean;
    data: T | null;
    error: PostgrestError | null;
}

export function mapSupabaseResponse<T, U>(
    response: { data: T | null; error: PostgrestError | null },
    transform: (data: T | null) => U = (data) => data as unknown as U
): BaseSupabaseResponse<U> {
    if (response.error) {
        return {
            success: false,
            data: null,
            error: response.error
        };
    }

    return {
        success: true,
        data: transform(response.data),
        error: null
    };
}
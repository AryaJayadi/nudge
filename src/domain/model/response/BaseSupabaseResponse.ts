import {PostgrestError} from "@supabase/supabase-js";

export type BaseSupabaseResponse<T> = {
    success: boolean;
    data: T | null;
    error: PostgrestError | null;
}
import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {Session} from "@supabase/supabase-js";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}

export function isAuthenticated(session: Session | null | undefined): boolean {
    if (session === null || session === undefined || session.expires_at === undefined) return false;

    try {
        const currentTime = Math.floor(Date.now() / 1000);

        return currentTime < session.expires_at;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export function formatDate(isoString: string) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-GB", {day: "2-digit", month: "short"}).format(date);
}

export function singleSupabaseResponseMapper<T>(res: any): BaseSupabaseResponse<T> {
    return mapSupabaseResponse(res, (data) => {
        if (data && Array.isArray(data) && data.length > 0) {
            return data[0] as T;
        }
        return null;
    });
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {Session} from "@supabase/supabase-js";

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
  if(session === null || session === undefined || session.expires_at === undefined) return false;

  try {
    const currentTime = Math.floor(Date.now() / 1000);

    return currentTime < session.expires_at;
  } catch (e) {
    console.log(e);
    return false;
  }
}
export interface Record {
    id: string; // UUID
    record_name: string;
    page_id?: string | null; // UUID (nullable)
    created_at?: string; // Timestamp (nullable, defaults to now)
    record_title?: string | null;
    record_description?: string | null;
    record_code?: string | null;
    category_id?: number | null;
}

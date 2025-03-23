import {Database, Tables} from "@/core/supabase.ts";

type DB = Database["public"]["Tables"];

declare global {
    type User = Tables<'nudge_user'>;
    type InsertUser = DB["nudge_user"]["Insert"];

    type UserConsent = Tables<'nudge_user_consent'>;
    type InsertUserConsent = DB["nudge_user_consent"]["Insert"];
    type UpdateUserConsent = DB["nudge_user_consent"]["Update"];

    type UserSurvey = Tables<'nudge_user_survey'>
    type InsertUserSurvey = DB["nudge_user_survey"]["Insert"];
    type UpdateUserSurvey = DB["nudge_user_survey"]["Update"];

    type UserConsentForm = Tables<'user_consent_form'>;
    type InsertUserConsentForm = DB["user_consent_form"]["Insert"];

    type UserFinishSurveys = Tables<'user_finish_surveys'>;
    type InsertUserFinishSurvey = DB["user_finish_surveys"]["Insert"];

    type Product = Tables<'nudge_product'>

    type UserResponses = Tables<'user_responses'>;
    type InsertUserResponse = DB["user_responses"]["Insert"];

    type PublicUser = Tables<'users'>;
    type InsertPublicUser = DB["users"]["Insert"];

    type TransactionHistory = Tables<'transaction_history'>;
    type InsertTransactionHistory = DB["transaction_history"]["Insert"];

    type Records = Tables<'records'>

    type RecordCategory = Tables<'record_categories'>

    type TransactionHistoryWithDetails = TransactionHistory & {
        records: Records & {
            category: RecordCategory;
        }
    }
}
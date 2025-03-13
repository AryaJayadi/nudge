import {Database, Tables} from "@/core/supabase.ts";

declare global {
    type UserConsentForm = Tables<'user_consent_form'>;
    type InsertUserConsentForm = Database["public"]["Tables"]["user_consent_form"]["Insert"];

    type UserFinishSurveys = Tables<'user_finish_surveys'>;
    type InsertUserFinishSurvey = Database["public"]["Tables"]["user_finish_surveys"]["Insert"];

    type UserResponses = Tables<'user_responses'>;
    type InsertUserResponse = Database["public"]["Tables"]["user_responses"]["Insert"];
}
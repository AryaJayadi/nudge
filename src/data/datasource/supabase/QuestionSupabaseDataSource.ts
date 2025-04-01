import QuestionDataSource from "@/data/datasource/QuestionDataSource.ts";
import {Question} from "@/domain/model/Question.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {BaseSupabaseResponse, mapSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default class QuestionSupabaseDataSource implements QuestionDataSource {

    async getQuestions(): Promise<Question[]> {
        const response = await supabase
            .from("questions")
            .select("*")
            .order('created_at', { ascending: true });

        if (response.error) {
            console.error("Error fetching record by category:", response.error.message);
            return [];
        }

        if (!response.data) {
            console.error("Error fetching record by category:");
            return [];
        }

        console.log(response);
        return response.data as Question[];
    }

    async insertResponses(data: InsertUserResponseSupabase[]): Promise<BaseSupabaseResponse<UserResponses[]>> {
        const res = await supabase
            .from("nudge_user_questionnaire_response")
            .upsert(data)
            .select();

        return mapSupabaseResponse(res, (data) => {
            if (data && Array.isArray(data) && data.length > 0) {
                return data as UserResponses[];
            }

            return [];
        });
    }
}
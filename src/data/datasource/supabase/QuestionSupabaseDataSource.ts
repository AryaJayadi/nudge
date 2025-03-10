import QuestionDataSource from "@/data/datasource/QuestionDataSource.ts";
import {Question} from "@/domain/model/Question.ts";
import supabase from "@/core/DatabaseSupabase.tsx";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {UserResponses} from "@/core/global.types.ts";
import {PostgrestError} from "@supabase/supabase-js";

export default class QuestionSupabaseDataSource implements QuestionDataSource {

    async getQuestions(): Promise<Question[]> {
        const response = await supabase
            .from("questions")
            .select("*");

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

    async insertResponses(data: InsertUserResponseSupabase[]): Promise<UserResponses[] | PostgrestError> {
        console.log(data);
        return data;
    }
}
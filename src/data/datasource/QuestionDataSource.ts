import {Question} from "@/domain/model/Question.ts";
import {UserResponses} from "@/core/global.types.ts";
import {PostgrestError} from "@supabase/supabase-js";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";

export default interface QuestionDataSource {

    getQuestions() : Promise<Question[]>;

    insertResponses(data: InsertUserResponseSupabase[]): Promise<UserResponses[] | PostgrestError>;
}
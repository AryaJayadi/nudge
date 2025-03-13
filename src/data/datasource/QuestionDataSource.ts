import {Question} from "@/domain/model/Question.ts";
import {InsertUserResponseSupabase} from "@/domain/model/request/InsertUserResponseSupabase.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default interface QuestionDataSource {

    getQuestions() : Promise<Question[]>;

    insertResponses(data: InsertUserResponseSupabase[]): Promise<BaseSupabaseResponse<UserResponses[]>>;
}
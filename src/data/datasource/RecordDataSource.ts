import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export default interface RecordDataSource {

    getRecordByCategory(category: RecordCategory): Promise<BaseSupabaseResponse<Record[]>>;
}
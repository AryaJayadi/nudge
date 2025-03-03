import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";

export interface RecordRepository {

    getRecordByCategory(category: RecordCategory): Promise<Record[]>;
}
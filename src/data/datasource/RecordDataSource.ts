import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";

export default interface RecordDataSource {

    getRecordByCategory(category: RecordCategory): Promise<Record[]>;
}
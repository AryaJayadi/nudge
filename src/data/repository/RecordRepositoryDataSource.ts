import {RecordRepository} from "@/domain/repository/RecordRepository.ts";
import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";
import RecordDataSource from "@/data/datasource/RecordDataSource.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

export class RecordRepositoryDataSource implements RecordRepository {
    private datasource: RecordDataSource;

    constructor(_datasource: RecordDataSource) {
        this.datasource = _datasource;
    }

    getRecordByCategory(category: RecordCategory): Promise<BaseSupabaseResponse<Record[]>> {
        return this.datasource.getRecordByCategory(category);
    }
}
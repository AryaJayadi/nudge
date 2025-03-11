import {RecordCategory} from "@/domain/interface/RecordCategory.ts";
import {Record} from "@/domain/model/Record.ts";
import {RecordRepository} from "@/domain/repository/RecordRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";

interface RecordGetByCategoryUseCase {
    invoke(category: RecordCategory): Promise<BaseSupabaseResponse<Record[]>>;
}

export class RecordGetByCategory implements RecordGetByCategoryUseCase {
    private repository: RecordRepository;

    constructor(_repository: RecordRepository) {
        this.repository = _repository;
    }

    invoke(category: RecordCategory): Promise<BaseSupabaseResponse<Record[]>> {
        return this.repository.getRecordByCategory(category);
    }
}
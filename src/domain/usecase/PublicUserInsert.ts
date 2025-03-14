import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserRepository} from "@/domain/repository/UserRepository.ts";

interface PublicUserInsertUseCase {
    invoke(data: InsertPublicUser) : Promise<BaseSupabaseResponse<PublicUser>>;
}

export class PublicUserInsert implements PublicUserInsertUseCase {
    private repository: UserRepository;

    constructor(_repository: UserRepository) {
        this.repository = _repository;
    }

    invoke(data: InsertPublicUser): Promise<BaseSupabaseResponse<PublicUser>> {
        return this.repository.insertPublicUser(data);
    }
}
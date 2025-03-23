import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";
import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";

export interface UserSignUpUseCase {
    invoke: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
}

export class UserSignUp implements UserSignUpUseCase {

    private userConsentRepository: UserConsentRepository;
    private userSurveyRepository: UserSurveyRepository;
    private repository: UserRepository;

    constructor(_repository: UserRepository, _userConsentRepository: UserConsentRepository, _userSurveyRepository: UserSurveyRepository) {
        this.userConsentRepository = _userConsentRepository;
        this.userSurveyRepository = _userSurveyRepository;
        this.repository = _repository;
    }

    invoke(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        this.repository.signUp(data).then((res) => {
            if(res.data) {
                this.userConsentRepository.create(res.data.id);
                this.userSurveyRepository.create(res.data.id);
            }
            return res;
        })
        return this.repository.signUp(data);
    }
}
import {UserRepository} from "@/domain/repository/UserRepository.ts";
import {BaseSupabaseResponse} from "@/domain/model/response/BaseSupabaseResponse.ts";
import {UserConsentRepository} from "@/domain/repository/UserConsentRepository.ts";
import {UserSurveyRepository} from "@/domain/repository/UserSurveyRepository.ts";
import {FinishSimulationRepository} from "@/domain/repository/FinishSimulationRepository.ts";

export interface UserSignUpUseCase {
    invoke: (data: InsertUser) => Promise<BaseSupabaseResponse<User>>;
}

export class UserSignUp implements UserSignUpUseCase {

    private userConsentRepository: UserConsentRepository;
    private userSurveyRepository: UserSurveyRepository;
    private finishSimulationRepository: FinishSimulationRepository;
    private repository: UserRepository;

    constructor(_repository: UserRepository, _userConsentRepository: UserConsentRepository, _userSurveyRepository: UserSurveyRepository, _finishSimulationRepository: FinishSimulationRepository) {
        this.userConsentRepository = _userConsentRepository;
        this.userSurveyRepository = _userSurveyRepository;
        this.finishSimulationRepository = _finishSimulationRepository;
        this.repository = _repository;
    }

    invoke(data: InsertUser): Promise<BaseSupabaseResponse<User>> {
        return this.repository.signUp(data).then((res) => {
            if(res.data) {
                this.userConsentRepository.create(res.data.id);
                this.userSurveyRepository.create(res.data.id);
                this.finishSimulationRepository.create({
                    nudge_user_id: res.data.id,
                    finish: false
                } as InsertFinishSimulation);
            }
            return res;
        });
    }
}
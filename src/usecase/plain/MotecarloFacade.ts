import { MontecarloRepository } from "src/domain/repository/montecarlo/plain/MontecarloRepository";

import {
  MontecarloDomain,
  MontecarloDomainImpl,
} from "../../domain/model/montecarlo/plain/MontecarloDomain";
import { MontecarloRepositoryImpl } from "../../infrastructure/repository/montecarlo/plain/MontecarloRepositoryImpl";

export interface MontecarloFacede {
  execute(): void;
}

export class MontecarloFacedeImpl implements MontecarloFacede {
  private readonly montecarloDomain: MontecarloDomain;
  private readonly montecarloRepository: MontecarloRepository;
  constructor() {
    this.montecarloDomain = new MontecarloDomainImpl();
    this.montecarloRepository = new MontecarloRepositoryImpl();
  }
  public execute(): void {
    const result: number = this.montecarloDomain.calculation();
    this.montecarloRepository.regist(result);
  }
}

import { inject, injectable } from "inversify";

import { MontecarloInversifyDomain } from "../../domain/model/montecarlo/inversify/MontecarloInversifyDomain";
import { MontecarloInversifyRepository } from "../../domain/repository/montecarlo/inversify/MontecarloInversifyRepository";
import TYPES from "../../types/TYPES";

export interface MontecarloInversifyFacede {
  execute(): void;
}

@injectable()
export class MontecarloInversifyFacedeImpl
  implements MontecarloInversifyFacede {
  @inject(TYPES.MontecarloInversifyDomain)
  private readonly montecarloInversifyDomain: MontecarloInversifyDomain;
  @inject(TYPES.MontecarloInversifyRepository)
  private readonly montecarloInversifyRepository: MontecarloInversifyRepository;
  async execute(): Promise<void> {
    const result: number = await this.montecarloInversifyDomain.calculation();
    await this.montecarloInversifyRepository.regist(result);
  }
}

import { inject, injectable } from "tsyringe";

import { MontecarloTSyringeDomain } from "../../domain/model/montecarlo/tsyringe/MontecarloTSyringeDomain";
import { MontecarloTSyringeRepository } from "../../domain/repository/montecarlo/tsyringe/MontecarloTSyringeRepository";

export interface MontecarloTSyringeFacede {
  execute(): void;
}

@injectable()
export class MontecarloTSyringeFacedeImpl implements MontecarloTSyringeFacede {
  constructor(
    @inject("MontecarloTSyringeDomain")
    private readonly montecarloTSyringeDomain: MontecarloTSyringeDomain,
    @inject("MontecarloTSyringeRepository")
    private readonly montecarloTSyringeRepository: MontecarloTSyringeRepository
  ) {}
  async execute(): Promise<void> {
    let result: number = await this.montecarloTSyringeDomain.calculation();
    await this.montecarloTSyringeRepository.regist(result);
  }
}

import { Montecarlo } from "src/entity/Montecarlo";
import { dataMapper } from "src/infrastructure/client/DynamoDBClient";
import { injectable } from "tsyringe";

import { MontecarloTSyringeRepository } from "../../../../domain/repository/montecarlo/tsyringe/MontecarloTSyringeRepository";

@injectable()
export class MontecarloTSyringeRepositoryImpl
  implements MontecarloTSyringeRepository {
  async regist(result: number): Promise<void> {
    await dataMapper.put(
      Object.assign(new Montecarlo(), {
        id: String(Date.now()),
        result: result,
      })
    );
  }
}

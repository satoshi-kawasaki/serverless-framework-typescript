import { injectable } from "inversify";
import { Montecarlo } from "src/entity/Montecarlo";
import { dataMapper } from "src/infrastructure/client/DynamoDBClient";

import { MontecarloInversifyRepository } from "../../../../domain/repository/montecarlo/inversify/MontecarloInversifyRepository";

@injectable()
export class MontecarloInversifyRepositoryImpl
  implements MontecarloInversifyRepository {
  async regist(result: number): Promise<void> {
    await dataMapper.put(
      Object.assign(new Montecarlo(), {
        id: String(Date.now()),
        result: result,
      })
    );
  }
}

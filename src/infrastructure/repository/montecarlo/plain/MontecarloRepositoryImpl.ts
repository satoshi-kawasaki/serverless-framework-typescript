import { Montecarlo } from "src/entity/Montecarlo";

import { MontecarloRepository } from "../../../../domain/repository/montecarlo/plain/MontecarloRepository";
import { dataMapper } from "../../../client/DynamoDBClient";

export class MontecarloRepositoryImpl implements MontecarloRepository {
  async regist(result: number): Promise<void> {
    await dataMapper.put(
      Object.assign(new Montecarlo, {
        id: String(Date.now()),
        result: result,
      })
    );
  }
}

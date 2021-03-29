import { container } from "tsyringe";

import { MontecarloTSyringeDomainImpl } from "../domain/model/montecarlo/tsyringe/MontecarloTSyringeDomain";
import { MontecarloTSyringeRepositoryImpl } from "../infrastructure/repository/montecarlo/tsyringe/MontecarloTSyringeRepositoryImpl";
import {
  MontecarloTSyringeFacede,
  MontecarloTSyringeFacedeImpl,
} from "../usecase/tsyringe/MontecarloTSyringeFacede";

container.register("MontecarloTSyringeDomain", {
  useClass: MontecarloTSyringeDomainImpl,
});
container.register("MontecarloTSyringeRepository", {
  useClass: MontecarloTSyringeRepositoryImpl,
});
container.register<MontecarloTSyringeFacede>("MontecarloTSyringeFacede", {
  useClass: MontecarloTSyringeFacedeImpl,
});

export { container };

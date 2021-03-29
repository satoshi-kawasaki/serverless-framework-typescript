import "reflect-metadata";
import "source-map-support/register";

import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { container } from "@libs/tsyringe.registry";
import { Handler } from "aws-lambda";

import { MontecarloTSyringeFacede } from "../../usecase/tsyringe/MontecarloTSyringeFacede";

const montecarloTSyringeFacede: MontecarloTSyringeFacede = container.resolve<MontecarloTSyringeFacede>(
  "MontecarloTSyringeFacede"
);

const montecarloTSyringe: Handler = async (event) => {
  await montecarloTSyringeFacede.execute();
  return formatJSONResponse({
    status: `montecarlo-tsyringe SUCCESS !!!`,
    event,
  });
};

export const main = middyfy(montecarloTSyringe);

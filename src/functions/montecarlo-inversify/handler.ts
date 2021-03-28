import "source-map-support/register";

import { formatJSONResponse } from "@libs/apiGateway";
import container from "@libs/inversify.config";
import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";

import TYPES from "../../types/TYPES";
import { MontecarloInversifyFacede } from "../../usecase/inversify/MontecarloInversifyFacede";

const montecarloInversifyFacede: MontecarloInversifyFacede = container.get<MontecarloInversifyFacede>(
  TYPES.MontecarloInversifyFacede
);

const montecarloInversify: Handler = async (event) => {
  await montecarloInversifyFacede.execute();
  return formatJSONResponse({
    status: `montecarlo-inversify SUCCESS !!!`,
    event,
  });
};

export const main = middyfy(montecarloInversify);

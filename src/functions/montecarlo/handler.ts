import "source-map-support/register";

import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { Handler } from "aws-lambda";

import {
  MontecarloFacede,
  MontecarloFacedeImpl,
} from "../../usecase/plain/MotecarloFacade";

const montecarloFacede: MontecarloFacede = new MontecarloFacedeImpl();

const motecarlo: Handler = async (event) => {
  await montecarloFacede.execute();
  return formatJSONResponse({
    status: `SUCCESS !!!`,
    event,
  });
};

export const main = middyfy(motecarlo);

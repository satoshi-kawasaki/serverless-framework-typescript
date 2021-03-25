import { DataMapper } from "@aws/dynamodb-data-mapper";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

const dynamoDB: DynamoDB = process.env.IS_OFFLINE
  ? new DynamoDB({
      region: "localhost",
      endpoint: "http://localhost:8000",
    })
  : new DynamoDB();

export const dataMapper = new DataMapper({
  client: dynamoDB,
});

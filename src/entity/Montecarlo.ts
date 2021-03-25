import {
  attribute,
  hashKey,
  table,
} from "@aws/dynamodb-data-mapper-annotations";

@table("montecarlo")
export class Montecarlo {
  @hashKey()
  id: string;
  @attribute()
  result: number;
}

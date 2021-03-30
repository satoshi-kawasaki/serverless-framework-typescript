import {
  hello,
  montecarlo,
  montecarloInversify,
  montecarloTSyringe,
} from "./src/functions";

import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-ts",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    dynamodb: {
      stages: "dev",
      start: {
        port: 8000,
        inMemory: true,
        migrate: true,
        seed: true,
      },
      seed: {
        development: {
          sources: {
            table: "montecarlo",
            sources: ["migrations/montecarlo.json"],
          },
        },
      },
    },
  },
  resources: {
    Resources: {
      Motecarlo: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "montecarlo",
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1000,
          },
        },
      },
    },
  },
  plugins: [
    "serverless-webpack",
    "serverless-offline",
    "serverless-dynamodb-local",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "ap-northeast-1",
    profile: "satoshi-kawasaki",
    apiGateway: {
      minimumCompressionSize: 512,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["dynamodb:PutItem", "dynamodb:Scan"],
        Resource: "*",
      },
    ],
  },
  functions: { hello, montecarlo, montecarloInversify, montecarloTSyringe },
};

module.exports = serverlessConfiguration;

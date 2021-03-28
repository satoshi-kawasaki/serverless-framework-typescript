import 'reflect-metadata';

import { Container } from 'inversify';

import {
  MontecarloInversifyDomain,
  MontecarloInversifyDomainImpl,
} from '../domain/model/montecarlo/inversify/MontecarloInversifyDomain';
import { MontecarloInversifyRepository } from '../domain/repository/montecarlo/inversify/MontecarloInversifyRepository';
import {
  MontecarloInversifyRepositoryImpl,
} from '../infrastructure/repository/montecarlo/inversify/MontecarloInversifyRepositoryImpl';
import TYPES from '../types/TYPES';
import { MontecarloInversifyFacede, MontecarloInversifyFacedeImpl } from '../usecase/inversify/MontecarloInversifyFacede';

const container = new Container();
{
  container
    .bind<MontecarloInversifyFacede>(TYPES.MontecarloInversifyFacede)
    .to(MontecarloInversifyFacedeImpl)
    .inRequestScope();
  container
    .bind<MontecarloInversifyDomain>(TYPES.MontecarloInversifyDomain)
    .to(MontecarloInversifyDomainImpl)
    .inRequestScope();
  container
    .bind<MontecarloInversifyRepository>(TYPES.MontecarloInversifyRepository)
    .to(MontecarloInversifyRepositoryImpl)
    .inRequestScope();
}

export default container;

import { injectable } from "tsyringe";

export interface MontecarloTSyringeDomain {
  calculation(): number;
}

@injectable()
export class MontecarloTSyringeDomainImpl implements MontecarloTSyringeDomain {
  public calculation(): number {
    var inner = 0;
    for (var i = 0; i < 10000; i++) {
      const x = Math.random();
      const y = Math.random();
      const ran = Math.sqrt(x * x + y * y);
      if (1 > ran) {
        inner++;
      }
    }
    return (4 * inner) / 10000;
  }
}

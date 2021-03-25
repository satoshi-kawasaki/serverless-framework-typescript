export interface MontecarloDomain {
  calculation(): number;
}

export class MontecarloDomainImpl implements MontecarloDomain {
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

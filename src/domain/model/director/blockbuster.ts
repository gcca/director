import { ValueObject } from '../../shared/valueobject';


export class Blockbuster implements ValueObject<Blockbuster> {

  constructor(public movieName: string,
              public release: number) {}

  sameValueAs(other: Blockbuster): boolean {
    return null;
  }

  copy(): Blockbuster {
    return null;
  }

}

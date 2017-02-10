import { Blockbuster } from './blockbuster';


export class Director {

  constructor(public fullName: string,
              public sex: string,
              public nationality: string,
              public city: string,
              public dob: number,
              public age: number | string,
              public blockbusters: Blockbuster[]) {}

}

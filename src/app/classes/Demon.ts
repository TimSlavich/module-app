import { Creature } from "./Creature";

export class Demon extends Creature {
    constructor(
      type: string,
      strength: number,
      endurance: number,
      coefficient: number,
      public magicalProperties: number
    ) {
      super(type, strength, endurance, coefficient);
    }
  
    calculateCost(callRate: number): number {
      return Math.round((
        callRate *
        (this.strength + this.endurance) *
        (1 + this.magicalProperties)
      ) * this.coefficient);
    }
}
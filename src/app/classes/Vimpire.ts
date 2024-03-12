import { Creature } from "./Creature";

export class Vampire extends Creature {
    constructor(
      type: string,
      strength: number,
      endurance: number,
      coefficient: number,
      public threatLevel: number
    ) {
      super(type, strength, endurance, coefficient);
    }
  
    calculateCost(callRate: number): number {
      return Math.round((callRate * this.strength + this.endurance + this.threatLevel) * this.coefficient);
    }
}
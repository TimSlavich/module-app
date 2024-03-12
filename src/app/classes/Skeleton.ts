import { Creature } from "./Creature";

export class Skeleton extends Creature {
    constructor(
      type: string,
      strength: number,
      endurance: number,
      coefficient: number
    ) {
      super(type, strength, endurance, coefficient);
    }
  
    calculateCost(callRate: number): number {
      return Math.round((callRate * this.strength + 2 * this.endurance) * this.coefficient);
    }
  }
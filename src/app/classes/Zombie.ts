import { Creature } from "./Creature";

export class Zombie extends Creature {
    constructor(
      type: string,
      strength: number,
      endurance: number,
      coefficient: number
    ) {
      super(type, strength, endurance, coefficient);
    }
  
    calculateCost(callRate: number): number {
      return Math.round((callRate * this.strength + this.endurance) * this.coefficient);
    }
}
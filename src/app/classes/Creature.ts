export abstract class Creature {
    constructor(
      public type: string,
      public strength: number,
      public endurance: number,
      public coefficient: number,
    ) {}
  
    abstract calculateCost(callRate: number): number;
}
  
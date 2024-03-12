import { Injectable } from '@angular/core';
import { Creature } from './classes/Creature';

@Injectable({
  providedIn: 'root'
})
export class NecromancerService {
  private CostList: number[] = [];
  private CallRate: number = 10;

  async Cost(creature: Creature[]){
    this.CostList = [];
    
    for (let i = 0; i < creature.length; i++) {
      this.CostList.push(creature[i].calculateCost(this.CallRate))
    }
  }

  getCost(){
    return this.CostList;
  }

  getCallRate(){
    return this.CallRate;
  }

}

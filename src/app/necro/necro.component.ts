import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { GetDataService } from '../get-data.service';
import { NecromancerService } from '../necromancer.service';
import { Creature } from '../classes/Creature';
import { Vampire } from '../classes/Vimpire';
import { Demon } from '../classes/Demon';

@Component({
  selector: 'app-necro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './necro.component.html',
  styleUrl: './necro.component.css'
})
export class NecroComponent {
  private dataService: GetDataService = new GetDataService();
  private necromancerService: NecromancerService = new NecromancerService();
  Creatures: Creature[] = [];
  CostList: number[] = [];
  CallRate: number = 0;
  threatLevel: number = 0;
  magicalProperties: number = 0;

  async calculate() {
    await this.dataService.getData();
    this.Creatures = this.dataService.getCreatures();
    
    for (let i = 0; i < this.Creatures.length; i++) {
      if (this.Creatures[i].type == "vampire") {
        this.threatLevel = 0;
        this.threatLevel = (this.Creatures[i] as Vampire).threatLevel;
      }
      if (this.Creatures[i].type == "demon") {
        this.magicalProperties = 0;
        this.magicalProperties = (this.Creatures[i] as Demon).magicalProperties;
      }
    }
    
    await this.necromancerService.Cost(this.Creatures);
    this.CostList = this.necromancerService.getCost();
    this.CallRate = this.necromancerService.getCallRate();
  }
}

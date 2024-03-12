import { Injectable } from '@angular/core';
import { Creature } from './classes/Creature';
import { Zombie } from './classes/Zombie';
import { Skeleton } from './classes/Skeleton';
import { Vampire } from './classes/Vimpire';
import { Demon } from './classes/Demon';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private dataURL = 'https://api.jsonbin.io/v3/b/65f03a0b1f5677401f3c5cf8';
  Creatures: Creature[] = [];

  async getData() {
    try {
      this.Creatures = [];
      let creature!: Creature;
  
      let response = await fetch(this.dataURL);
      let data = await response.json();
  
      data = data.record;
  
      for (let i = 0; i < data.Necro.length; i++) {
        switch (data.Necro[i].type.toLowerCase()) {
          case 'zombie':
            creature = new Zombie(
              data.Necro[i].type,
              data.Necro[i].strength,
              data.Necro[i].endurance,
              data.Necro[i].coefficient
            );
            break;
          case 'skeleton':
            creature = new Skeleton(
              data.Necro[i].type,
              data.Necro[i].strength,
              data.Necro[i].endurance,
              data.Necro[i].coefficient
            );
            break;
          case 'vampire':
            creature = new Vampire(
              data.Necro[i].type,
              data.Necro[i].strength,
              data.Necro[i].endurance,
              data.Necro[i].threatLevel,
              data.Necro[i].coefficient
            );
            break;
          case 'demon':
            creature = new Demon(
              data.Necro[i].type,
              data.Necro[i].strength,
              data.Necro[i].endurance,
              data.Necro[i].magicalProperties,
              data.Necro[i].coefficient
            );
            break;
        }
        this.Creatures.push(creature);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }
  
  getCreatures() {
    return this.Creatures;
  }
}

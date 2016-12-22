import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero'
import {HEROES} from './mock/mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    // delay 2 seconds
    return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)) .then(() => this.getHeroes());
}

}
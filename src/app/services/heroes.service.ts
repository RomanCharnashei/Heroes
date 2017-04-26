import { Injectable } from '@angular/core';
import { Hero } from './../models/hero.model';


@Injectable()
export class HeroesService {
  public _heroes: Array<Hero>;

  constructor() {
    this._heroes = [ new Hero(1, 'Супермэн'), new Hero(2, 'Человек паук') ];
  }

  GetAllHeroes(): Array<Hero> {

    return this._heroes;
  }

}

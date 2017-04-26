import { Component, ViewEncapsulation } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private _heroes: Array<Hero>;

  constructor(heroesService: HeroesService) {
    this._heroes = heroesService.GetAllHeroes();
  }

  GetAllHeroes(): Array<Hero> {

    return this._heroes;
  }
}

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

    heroesService.GetAllHeroes().subscribe(heroes => {
      this._heroes = heroes;
    });
  }

  GetAllHeroes(): Array<Hero> {

    return this._heroes;
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { Hero } from 'app/common/models/hero.model';
import { HeroesService } from 'app/common/services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private _heroes: Array<Hero>;

  constructor(private heroesService: HeroesService) {

    this.heroesService.GetAllHeroes().subscribe(heroes => {
      this._heroes = heroes;
    });
  }

  deleteHero(hero)
  {
	this.heroesService.DeleteHero(hero).subscribe(_ => {
		var index = this._heroes.indexOf(hero);

		if (index >= 0) {
		  this._heroes.splice( index, 1 );
		}
	});
  }

  GetAllHeroes(): Array<Hero> {

    return this._heroes;
  }
}

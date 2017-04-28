import { Injectable } from '@angular/core';
import { HeroesService } from "app/common/services/heroes.service";
import { Observable } from "rxjs/Rx";
import { Hero } from "app/common/models/hero.model";

@Injectable()
export class HerousPreviewService {

  constructor(private heroesService: HeroesService,
    private heroes: Observable<Array<Hero>>) {

    
  }



  GetAllHeroes(): Observable<Array<Hero>> {
    if(!this.heroes) {
      this.heroes = this.heroesService.GetAllHeroes();
    }

    return this.heroes;
  }

  DeleteHero(hero: Hero) {
    var index = this.heroes.indexOf(hero);

		if (index >= 0) {
		  this._heroes.splice( index, 1 );
		}
  }

  CreateHero() {

  }



}

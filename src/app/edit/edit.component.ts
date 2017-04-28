import { Component, OnInit } from '@angular/core';
import { Hero } from "app/common/models/hero.model";
import { HeroesService } from "app/common/services/heroes.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  hero: Hero;

  constructor(private heroesService: HeroesService) {

    this.hero = new Hero();
  }

  onSubmit(event) {
    event.preventDefault();
    this.heroesService
      .CreateHero(this.hero)
      .subscribe(hero => {
        console.log(hero);
      });
  }

  ngOnInit() {

  }

}

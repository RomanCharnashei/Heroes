import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HeroesService } from "app/common/services/heroes.service";
import { Hero } from "app/common/models/hero.model";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
    hero: Hero = new Hero();

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private heroesService: HeroesService) { }

    ngOnInit() {
    	this.activatedRoute.params.forEach((params: Params) => {
    		let id = +params["id"];
    		this.heroesService
    		  .GetHeroById(id)
    		  .subscribe(hero => {
    		    this.hero = hero;
    		  },
    		  error =>  console.log(error));
    	});
    }

}

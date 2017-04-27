import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'app/common/models/hero.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  @Input() heroes: Array<Hero>;
  @Output() deleteHeroEv: EventEmitter<Hero> = new EventEmitter<Hero>();

  public searchName:  string;

  constructor() { }

  deleteHero(hero)
  {
    this.deleteHeroEv.emit(hero);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/common/models/hero.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() hero: Hero;
  @Output() deleteHeroEv: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() { }

  deleteHero()
  {
    this.deleteHeroEv.emit(this.hero);
  }

  ngOnInit() {
  }

}

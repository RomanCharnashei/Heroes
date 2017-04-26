import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../models/hero.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  @Input() heroes: Array<Hero>;

  constructor() { }



  ngOnInit() {
  }

}

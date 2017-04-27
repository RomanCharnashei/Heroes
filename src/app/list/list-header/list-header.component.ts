import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs/Rx";

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit {

	@Output() searchKeyPress = new EventEmitter<string>();
	model: string;
	modelChanged: Subject<string> = new Subject<string>();

	constructor()
	{
		this.modelChanged
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(model => this.searchKeyPress.emit(model));
	}


	ngOnInit()
	{

	}

}

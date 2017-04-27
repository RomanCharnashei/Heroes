import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from "app/common/models/hero.model";

@Pipe({
  name: 'nameFilter',
  pure: false
})

export class NameFilterPipe implements PipeTransform {

	transform(items: Hero[], filter?: string): any {

		if (!items || !filter) {
			return items;
		}

		return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
	}

}

import { Injectable } from '@angular/core';
import { Hero } from './../models/hero.model';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HeroesService {

  private _heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  GetAllHeroes(): Observable<Array<Hero>> {

    return this.http.get(this._heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  GetHeroById(id: number): Observable<Hero> {

    return this.http.get(this._heroesUrl + `/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    
    return Observable.throw(errMsg);
  }

}

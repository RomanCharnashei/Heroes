import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent, ListHeaderComponent, ListItemComponent } from './list';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HeroesService } from "app/common/services/heroes.service";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'app/common/services/in-memory-db.service';
import { NameFilterPipe } from './common/pipes/name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ListHeaderComponent,
    ListItemComponent,
    ItemDetailComponent,
    DashboardComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 0}),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'hero/:id',
        component: ItemDetailComponent
      }
    ])
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

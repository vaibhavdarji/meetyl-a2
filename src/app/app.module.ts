import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { MissionListComponent } from './mission-list.component';
import {MissionDetailComponent} from './mission-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

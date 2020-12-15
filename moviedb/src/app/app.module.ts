import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './services/people.service';
import { MatTableModule } from '@angular/material/table';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

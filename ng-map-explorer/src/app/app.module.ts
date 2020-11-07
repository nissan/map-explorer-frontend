import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TodoComponent } from './todo/todo.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './pop-up.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TodoComponent,
    LoadDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MarkerService, PopUpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

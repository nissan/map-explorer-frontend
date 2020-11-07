import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { MapComponent } from './map/map.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },  {
    path:'map',
    component: MapComponent
  },
  {
    path:'todo',
    component: TodoComponent
  },
  {
    path:'load-data',
    component: LoadDataComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

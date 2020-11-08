import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NycTaximapComponent } from './nyc-taximap/nyc-taximap.component';
import { TodoComponent } from './todo/todo.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'upload',
    component: UploadComponent,
  },
  {
    path:'nyc-taxi-map',
    component: NycTaximapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

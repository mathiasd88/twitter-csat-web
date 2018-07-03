import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MapComponent} from './components/map/map.component';

const roomRoutes: Routes = [
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(roomRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

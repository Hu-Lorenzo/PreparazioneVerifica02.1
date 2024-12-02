import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaFComponent } from './ricerca-f/ricerca-f.component';
import { FoodVComponent } from './food-v/food-v.component';

const routes: Routes = [
  { path: 'search', component: RicercaFComponent },
  { path: 'item/:id', component: FoodVComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

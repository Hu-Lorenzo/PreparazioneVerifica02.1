import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RicercaFComponent } from './ricerca-f/ricerca-f.component';
import { FoodVComponent } from './food-v/food-v.component';

@NgModule({
  declarations: [
    AppComponent,
    RicercaFComponent,
    FoodVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

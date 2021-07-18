import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { IndexComponent } from './index/index.component';
import { ExoIfComponent } from './exo-if/exo-if.component';
import { RouteAvecParametreComponent } from './route-avec-parametre/route-avec-parametre.component';
import { ArrayPlusMoinsComponent } from './array-plus-moins/array-plus-moins.component';
import { CompteurComponent } from './compteur/compteur.component';
import { NumberCountComponent } from './number-count/number-count.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    IndexComponent,
    ExoIfComponent,
    RouteAvecParametreComponent,
    ArrayPlusMoinsComponent,
    CompteurComponent,
    NumberCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

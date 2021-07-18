import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayPlusMoinsComponent } from './array-plus-moins/array-plus-moins.component';
import { CompteurComponent } from './compteur/compteur.component';
import { ExoIfComponent } from './exo-if/exo-if.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { IndexComponent } from './index/index.component';
import { NumberCountComponent } from './number-count/number-count.component';
import { RouteAvecParametreComponent } from './route-avec-parametre/route-avec-parametre.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {path: 'first-component', component: FirstComponentComponent},
  {path: 'second-component', component: SecondComponentComponent},
  {path: 'index', component: IndexComponent},
  {path: 'exo-if', component: ExoIfComponent},
  {path: 'array-plus-moins', component: ArrayPlusMoinsComponent},
  {path: 'compteur', component: CompteurComponent},
  {path: 'number-count', component: NumberCountComponent},
  {path: 'route-avec-parametre/:code', component: RouteAvecParametreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

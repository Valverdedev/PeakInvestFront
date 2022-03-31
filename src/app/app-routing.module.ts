import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularComponent } from './calcular/calcular.component';
import { GetListComponent } from './get-list/get-list.component';

const routes: Routes = [
  { path: 'calcular', component: CalcularComponent },
  { path: 'getlist', component:  GetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscenicosComponent } from './Components/Fundamentos/escenicos/escenicos.component';
import { IluminacionComponent } from './Components/Fundamentos/iluminacion/iluminacion.component';
import { VestuarioComponent } from './Components/Fundamentos/vestuario/vestuario.component';

const routes: Routes = [
  {
    path:'escenicos',component:EscenicosComponent
  },
  {
    path:'iluminacion',component:IluminacionComponent
  },
  {
    path:'vestuario',component:VestuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './cep.component';

const routes: Routes = [
  { path: 'cep', component: CepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
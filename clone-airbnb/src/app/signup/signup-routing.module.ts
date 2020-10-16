import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [], 
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SignupRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAComponent } from './modules/test-a/test-a.component';
import { TestBComponent } from './modules/test-b/test-b.component';

const routes: Routes = [
  {
    path:'testa',
    component:TestAComponent
  },
  {
    path:'testb',
    component:TestBComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

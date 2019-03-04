import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReponsepageComponent } from './reponsepage/reponsepage.component';
import { QrComponent } from './reponsepage/qr/qr.component';

const routes: Routes = [
  {
    path:'',component:QrComponent
  },
  {
    path: 'res/:id', component: ReponsepageComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentDataComponent } from './content-data/content-data.component';

const routes: Routes = [
  {
    path:'table',
    component:ContentDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

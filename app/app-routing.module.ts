import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login",component :LoginComponent},
  {path:"courseslist",component:CoursesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

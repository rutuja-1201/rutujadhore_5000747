import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListempComponent } from './listemp/listemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'',component:ListempComponent},
{path:'app-listemp',component:ListempComponent},

{path:'app-addemp',component:AddempComponent},
{path:'app-update',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

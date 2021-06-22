import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [{
  path:'',component:IngredienteComponent
}
,
{
  path:'ingredientes',component:IngredienteComponent
},
{
  path:'productos',component:ProductoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

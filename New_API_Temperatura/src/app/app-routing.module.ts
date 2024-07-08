import { RouterModule, Routes } from "@angular/router";
import { ClimaHomeComponent } from "./modules/page/clima-home/clima-home.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'clima',
    pathMatch: 'full'
  },
{
  path: 'clima',
  component: ClimaHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

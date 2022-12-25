import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";


const routes: Routes = [
  {path : "", component: ContractListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

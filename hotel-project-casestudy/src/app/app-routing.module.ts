import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";
import {ContractComponent} from "./contract/contract.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {CustomerComponent} from "./customer/customer.component";


const routes: Routes = [
  {path: "", component: FacilityComponent},
  {path: "customer", component: CustomerComponent},
  {path: "facility", component: FacilityComponent},
  {path: "contract", component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

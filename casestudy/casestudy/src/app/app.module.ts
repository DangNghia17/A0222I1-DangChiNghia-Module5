import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer-list/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ResortComponent } from './resort/resort.component';
import { ServiceComponent } from './service/list-service/service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { DeleteServiceComponent } from './service/delete-service/delete-service.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ResortComponent,
    ServiceComponent,
    CreateServiceComponent,
    EditServiceComponent,
    DeleteServiceComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import {APP_BASE_HREF} from "@angular/common";
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './facility/facility-delete/facility-delete.component';
import { FacilityComponent } from './facility/facility.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { ContractComponent } from './contract/contract.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    FacilityDeleteComponent,
    FacilityComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    ContractComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

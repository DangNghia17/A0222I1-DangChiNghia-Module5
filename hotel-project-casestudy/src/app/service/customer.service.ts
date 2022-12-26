import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`http://localhost:3000/customers`);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`http://localhost:3000/customers`, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:3000/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`http://localhost:3000/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`http://localhost:3000/customers/${id}`);
  }
}

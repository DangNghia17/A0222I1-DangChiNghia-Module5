import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`http://localhost:3000/contracts`);
  }

  saveContract(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(`http://localhost:3000/contracts`, contract);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`http://localhost:3000/contracts/${id}`);
  }

}

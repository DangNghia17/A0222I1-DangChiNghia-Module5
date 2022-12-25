import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilities: Facility[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(`http://localhost:3000/facilities`);
  }

  saveFacility(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(`http://localhost:3000/facilities`, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`http://localhost:3000/facilities/${id}`);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`http://localhost:3000/facilities/${id}`, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(`http://localhost:3000/facilities/${id}`);
  }
}

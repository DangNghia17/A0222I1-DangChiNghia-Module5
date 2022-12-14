import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Save} from "../model/save";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly URL_LIST = 'http://localhost:8080/students/list';
  readonly URL_FIND_BY_ID = 'http://localhost:8080/students/find/';

  constructor(private httpClient : HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_LIST);
  }

  save(student): Observable<Student> {
    return this.httpClient.post<Student>(`http://localhost:3000/students`, student);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`http://localhost:3000/students/${id}`, student);
  }

  deleteSave(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(`http://localhost:3000/students/${id}`);
  }
}

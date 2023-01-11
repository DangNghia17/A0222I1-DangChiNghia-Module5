import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] =
    [
      {id: 1, name: 'Iphone'},
      {id: 2, name: 'Samsung'},
      {id: 3, name: 'LG'},
      {id: 4, name: 'Oppo'}
    ];

  constructor(private httpClient: HttpClient) {
  }

  // getAll() {
  //   return this.categories;
  // };

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000' + '/category');
  }

  // saveCategory(category) {
  //   return this.categories.push(category);
  // }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post<Category>('http://localhost:3000' + '/category', category);
  }

  // findById(id: number) {
  //   return this.categories.find(category => category.id === id);
  // }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`http://localhost:3000/category/${id}`);
  }

  // updateCategory(id: number, category: Category) {
  //   for (let i = 0; i < this.categories.length; i++) {
  //     if (this.categories[i].id === id) {
  //       this.categories[i] = category;
  //     }
  //   }
  // }
  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`http://localhost:3000/category/${id}`, category);
  }

  // deleteCategory(id: number) {
  //   this.categories = this.categories.filter(category => {
  //     return category.id !== id;
  //   });
  // }
  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`http://localhost:3000/category/${id}`);
  }
}

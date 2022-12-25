import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] =
  //   [
  //   {id: 1, name: 'IPhone 12', price: 2400000, description: 'New'},
  //   {id: 2, name: 'IPhone 11', price: 1560000, description: 'Like new'},
  //   {id: 3, name: 'IPhone X', price: 968000, description: '97%'},
  //   {id: 4, name: 'IPhone 8', price: 7540000, description: '98%'},
  //   {id: 5, name: 'IPhone 11 Pro', price: 1895000, description: 'Like new'}
  //   ]

  constructor(private httpClient: HttpClient) {
  }

  // getAll() {
  //   return this.products;
  // }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products`);
  }

  // saveProduct(product) {
  //   return this.products.push(product);
  // }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(`http://localhost:3000/products`, product);
  }

  // findById(id: number) {
  //   return this.products.find(product => product.id === id);
  // }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  // updateProduct(id: number, product: Product) {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if (this.products[i].id === id) {
  //       this.products[i] = product;
  //     }
  //   }
  // }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`http://localhost:3000/products/${id}`, product);
  }


  //   deleteProduct(id: number) {
  //   this.products = this.products.filter(product => {
  //     return product.id !== id;
  //   })
  // }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`);
  }
}

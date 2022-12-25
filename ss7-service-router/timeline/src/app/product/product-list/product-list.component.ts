import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;
  totalRecords: number = 0;
  searchText;
  categories: Category[] = [];


  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllCategory();
  }

  private getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products.sort((a, b) => (
        b.id - a.id
      ));
      this.totalRecords = products.length;
    });
    console.log(this.products);
  };

  pageChanged(event: number) {
    this.page = event;
  };

  getAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }
}

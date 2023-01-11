import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(){
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    let id = product.category;
    this.categoryService.findById(id).subscribe(data => {
      product.category = data;
      this.productService.saveProduct(product).subscribe(()=> {
        console.log(product);
        this.productForm.reset();
        alert('Tạo mới thành công');
      });
    });
  }

   getAllCategory() {
    this.categoryService.getAll().subscribe(categories =>{
      this.categories = categories;
    })
  }
}

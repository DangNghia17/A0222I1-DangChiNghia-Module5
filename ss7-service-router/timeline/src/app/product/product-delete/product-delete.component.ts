import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router  ) {
  };

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');    // get id từ link
      this.getProduct(this.id);
    });
  }
  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category.id)
      })
    });
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      alert("Xoá sản phẩm thành công !");
    }, error => console.log(error));


  }
}

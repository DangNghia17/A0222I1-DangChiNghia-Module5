import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm : FormGroup ;
  id : number;
  constructor(private categoryService : CategoryService ,
              private router :Router,
              private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap : ParamMap) => {
      this.id = +paramMap.get('id');
      const category = this.categoryService.findById(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name)
      });
    });
  }

  ngOnInit() {
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id);
    this.router.navigateByUrl('category/list');
  }
}
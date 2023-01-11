import {Component, OnInit} from '@angular/core';
import {Save} from "../model/save";
import {Customer} from "../model/customer";
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[];
  deleteStudent: Student = {};
  searchText: any;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe(students => {
      this.students = students;
      console.log(this.students);
    })
  };

  delModal(student: Student) {
    this.deleteStudent = student;
  }

  delPackage(id: number) {
    this.studentService.deleteSave(id).subscribe(data => {
      this.deleteStudent = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
    alert('Xoa thanh cong.');
    this.router.navigate(['students']);
  }

}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BankServiceService} from "../service/bank-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentService} from "../service/student.service";
import {TeacherService} from "../service/teacher.service";
import {Teacher} from "../model/teacher";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  teachers: Teacher[] = [];
  studentFormEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    group: new FormControl(),
    topic: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    teacher: new FormControl()
  });


  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private teacherService: TeacherService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.id = +paramap.get('id');
      this.getStudent(this.id);
      console.log(this.id);
    })
  }

  ngOnInit(): void {
    this.getAllTeacher();
  }

  // [Validators.required]
  private getStudent(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      this.studentFormEdit = new FormGroup({
        id: new FormControl(student.id, [Validators.required] ),
        name: new FormControl(student.name, [Validators.required]),
        group: new FormControl(student.group, [Validators.required]),
        topic: new FormControl(student.topic, [Validators.required]),
        email: new FormControl(student.email, [Validators.required, Validators.email]),
        phone: new FormControl(student.phone, [Validators.required, Validators.pattern("(84)+([0-9]{8})")]),
        teacher: new FormControl(student.teacher.name, [Validators.required]),
      });
      console.log(this.studentFormEdit);
    })
  };


  editStudent(id: number) {
    const student = this.studentFormEdit.value;
    this.studentService.updateStudent(id, student).subscribe(() => {
      alert("Cập nhật thành công");
    }, error => {
      console.log(error);
    })
  };

  private getAllTeacher() {
    this.teacherService.getAll().subscribe(teachers => {
      this.teachers = teachers;
    });
  }
}

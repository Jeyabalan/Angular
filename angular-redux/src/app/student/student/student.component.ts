import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student: Student;
  @Input() index: number;
  @Output() updateStudent = new EventEmitter<string>();
}

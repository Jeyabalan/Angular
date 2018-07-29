import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getUserInfo } from './student/student.selectors';
import { fetchStudentAction, createStudentFulFilledAction, createStudentAction, updateStudentCountAction } from './student/action';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchStudent: Observable<Student[]>;
  email: string;
  name: string;

  newStudent: Student;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fetchStudentAction());
    this.fetchStudent = this.store.select(getUserInfo);
  }

  addNewStudent() {
    this.store.dispatch(createStudentAction({email: this.email, id: this.name, count: 1}));
  }

  updateStudent(student: string) {
    this.store.dispatch(updateStudentCountAction(student));
  }
}

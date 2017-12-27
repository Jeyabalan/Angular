import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getUserInfo } from './student/student.selectors';
import { fetchStudentAction } from './student/action';
import { Student } from './student/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchStudent = [];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fetchStudentAction());
    this.store.select(getUserInfo).subscribe(student => this.fetchStudent = student);
  }
}

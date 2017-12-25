import { Component } from '@angular/core';
import { Student } from './app.state';
import { Store } from '@ngrx/store';
import { getStudentInfo } from './app.selectors';
import { fetchStudentAction } from './actions/actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchStudent: Observable<Student>;

  constructor(private store: Store<Student>) {
    this.store.dispatch({type: 'FETCH_STUDENT'});
    this.fetchStudent = this.store.select(getStudentInfo);
  }
}

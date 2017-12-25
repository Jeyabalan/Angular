import { Component } from '@angular/core';
import { Student } from './app.state';
import { Store } from '@ngrx/store';
import { getStudentInfo } from './app.selectors';
import { fetchStudentAction } from './actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<Student>) {
    this.store.dispatch({type: 'FETCH_STUDENT'});
  }
}

import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getUserInfo } from './student/student.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fetchStudent = [];

  constructor(private store: Store<AppState>) {
    this.store.dispatch({type: 'FETCH_STUDENT'});
    this.store.select(getUserInfo).subscribe(student => {
      this.fetchStudent = student;
    });
  }
}

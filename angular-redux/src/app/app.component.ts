import { Component } from '@angular/core';
import { Student } from './app.state';
import { Store, select } from '@ngrx/store';
import { getStudentInfo } from './app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<Student>) {
    console.log(this.store);
  }
}

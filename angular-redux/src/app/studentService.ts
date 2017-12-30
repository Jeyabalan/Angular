import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Student } from './student/student.model';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
    private API_PATH = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    fetchStudent(): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.API_PATH + 'students');
    }

    addStudent(student): Observable<Student> {
        return this.http
            .post<Student>(this.API_PATH + 'students', student);
    }
}


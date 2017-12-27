import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,  } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { Student } from './student/student.model';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
    private API_PATH = 'https://api.github.com/users';

    constructor(private http: HttpClient) {}

    fetchStudent(): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.API_PATH)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    addStudent(student: Student[]): Observable<Object> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .post<Object>(this.API_PATH, student, )
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}


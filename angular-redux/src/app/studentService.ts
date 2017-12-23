import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from './app.state';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class StudentService {
    private API_PATH = 'https://api.github.com/users';

    constructor(private http: HttpClient) {}

    fetchStudent(): Observable<Student[]> {
        return this.http
            .get<Student[]>(`${this.API_PATH}`);
    }
}


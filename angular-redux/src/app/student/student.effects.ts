import { Injectable } from '@angular/core';
import { StudentService } from '../studentService';
import { Actions, Effect } from '@ngrx/effects';
import {
    FetchStudentAction,
    FETCH_STUDENT,
    fetchStudentFulFilledAction,
    CREATE_STUDENT,
    createStudentFulFilledAction,
    CreateStudentAction,
    fetchStudentError
 } from './action';
import { switchMap, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class StudentEffects {

    @Effect()
    fetchStudent = this.actions
        .ofType<FetchStudentAction>(FETCH_STUDENT)
        .pipe(switchMap(() =>
            this.api.fetchStudent().pipe(
                map(fetchStudentFulFilledAction)
            ))
        );

    @Effect()
    addStudent = this.actions
        .ofType<CreateStudentAction>(CREATE_STUDENT)
        .pipe(switchMap(student =>
            this.api.addStudent(student)
             .pipe(
                map(createStudentFulFilledAction)
             )
        ));

    constructor (
        private actions: Actions,
        private api: StudentService
    ) {}
}

import { Injectable } from '@angular/core';
import { StudentService } from '../studentService';
import { Actions, Effect } from '@ngrx/effects';
import { FetchStudentAction, FETCH_STUDENT, fetchStudentFulFilledAction } from './action';
import { switchMap, map } from 'rxjs/operators';

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

    constructor (
        private actions: Actions,
        private api: StudentService
    ) {}
}

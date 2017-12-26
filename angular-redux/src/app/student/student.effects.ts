import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects/src/actions';
import { StudentService } from '../studentService';
import { Effect } from '@ngrx/effects/src/effects_metadata';
import { FetchStudentAction, FETCH_STUDENT, FetchStudentFulFilledAction } from './student.action';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class StudentEffects {

    @Effect()
    fetchStudent = this.actions
        .ofType<FetchStudentAction>(FETCH_STUDENT)
        .pipe(switchMap(() =>
            this.api.fetchStudent().pipe(
                map(FetchStudentFulFilledAction)
            ))
        );

    constructor (
        private actions: Actions,
        private api: StudentService
    ) {}
}

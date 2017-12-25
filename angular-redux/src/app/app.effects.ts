import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as StudentActions from './actions/actions';
import { StudentService } from './studentService';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class StudentEffects {

    @Effect()
    fetchStudent = this.actions
        .ofType(StudentActions.FETCH_STUDENT)
        .pipe(switchMap(() => {
                // tslint:disable-next-line:one-line
                return this.api.fetchStudent().pipe(
                    map(StudentActions.fetchStudentFullFillAction)
                );
        }));

    constructor(
        private actions: Actions,
        private api: StudentService
    ) {}
}

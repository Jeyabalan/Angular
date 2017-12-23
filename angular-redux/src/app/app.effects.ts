/*import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { FETCH_STUDENT } from './actions/actions';


@Injectable()
export class StudentEffects {

    @Effect() fetchStudent = this.action
    .ofType('FETCH_STUDENT')
    .switchMap(()=> this.http)
    .map(FetchStudentFullFilledAction)

    constructor(
        private action: Actions,
        private http: Http
    ) {}
}*/

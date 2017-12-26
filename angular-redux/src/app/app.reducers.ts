import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { Student } from './student/student.model';
import { ActionReducer } from '@ngrx/store/src/models';
import { AppState } from './app.state';
import { StudentAction } from './student/student.reducers';

export const reducerToken = new InjectionToken<ActionReducerMap<Student>>('Registered Reducers');

export const reducers: ActionReducer<AppState, StudentAction> = {
    students
};

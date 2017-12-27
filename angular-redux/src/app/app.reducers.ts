import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { Student } from './student/student.model';
import { ActionReducer } from '@ngrx/store';
import { AppState } from './app.state';
import { StudentAction, student } from './student/student.reducers';

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const reducers: ActionReducerMap<AppState, StudentAction> = {
    student
};

import { ActionReducer } from '@ngrx/store/src/models';
import { Student } from './app.state';
import { combineReducers } from '@ngrx/store/src/utils';
import { FetchStudentFullFilledAction } from './actions/actions';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, State } from '@ngrx/store';

export type studentInfo = ActionReducer<Student[], FetchStudentFullFilledAction>;
export const studentInfo: studentInfo = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_FULLFILLED':
            return state;
        default:
            return state;
    }
};

export const student = combineReducers ({
    studentInfo
});

export const reducerToken = new InjectionToken<ActionReducerMap<Student>>('Registered Reducers');

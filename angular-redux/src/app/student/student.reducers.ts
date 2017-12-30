
import { ActionReducer } from '@ngrx/store/src/models';
import { Student } from './student.model';
import {
    FetchStudentFulFilledAction,
    FETCH_STUDENT_FULFILLED,
    FetchStudentAction,
    FetchStudentErrorAction,
    CreateStudentAction,
    CreateStudentFulFilledAction,
    CreateStudentErrorAction,
    CREATE_STUDENT,
    CREATE_STUDENT_FULFILLED
} from './action';
import { combineReducers } from '@ngrx/store';
import { StudentState } from './student.state';
import { type } from 'os';

export type StudentAction =
FetchStudentFulFilledAction
& FetchStudentAction
& FetchStudentErrorAction
& CreateStudentAction
& CreateStudentFulFilledAction
& CreateStudentErrorAction;

export type students = ActionReducer<Student[], StudentAction>;
export const students: students = (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENT_FULFILLED:
            return action.students;
        case CREATE_STUDENT_FULFILLED:
            return [...state, action.students];
        default:
            return state;
    }
};

export const student = combineReducers<StudentState, StudentAction> ({
    students
});

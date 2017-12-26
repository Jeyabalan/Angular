
import { ActionReducer } from '@ngrx/store/src/models';
import { Student } from './student.model';
import { FetchStudentFulFilledAction, FETCH_STUDENT_FULFILLED, FetchStudentAction, FetchStudentErrorAction } from './student.action';
import { combineReducers } from '@ngrx/store/src/utils';
import { StudentState } from './student.state';

export type StudentAction =
FetchStudentFulFilledAction
& FetchStudentAction
& FetchStudentErrorAction;

export type students = ActionReducer<Student[], StudentAction>;
export const students: students = (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENT_FULFILLED:
            return action.students;
        default:
            return state;
    }
};

export const student = combineReducers<StudentState, StudentAction> ({
    students
});

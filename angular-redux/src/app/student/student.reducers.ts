
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
    CREATE_STUDENT_FULFILLED,
    UPDATE_STUDENT_COUNT_FULFILLED,
    UpdateStudentCountFulFiiledAction
} from './action';
import { combineReducers } from '@ngrx/store';
import { StudentState } from './student.state';

export type StudentAction =
FetchStudentFulFilledAction
& FetchStudentAction
& FetchStudentErrorAction
& CreateStudentAction
& CreateStudentFulFilledAction
& CreateStudentErrorAction
& UpdateStudentCountFulFiiledAction;

export type students = ActionReducer<Student[], StudentAction>;
export const students: students = (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENT_FULFILLED:
            return action.students;
        case CREATE_STUDENT_FULFILLED:
            return [...state, action.students];
        case UPDATE_STUDENT_COUNT_FULFILLED:
            const item = state.find(s => s.id === action.id);
            item.count++;
            state[state.findIndex(s => s.id === action.id)] = item;
            return state;
        default:
            return state;
    }
};

export const student = combineReducers<StudentState, StudentAction> ({
    students
});

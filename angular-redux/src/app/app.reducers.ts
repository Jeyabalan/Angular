import { ActionReducer } from '@ngrx/store/src/models';
import { Student } from './app.state';
import { combineReducers } from '@ngrx/store/src/utils';
import { fetchStudentFullFillAction, fetchStudent } from './actions/actions';

const StudentAction =
    fetchStudentFullFillAction | fetchStudent;

export type studentInfo = ActionReducer<Student[], StudentAction>;
export const studentInfo: studentInfo = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_STUDENT':
            return state;
        case 'FETCH_STUDENT_FULLFILLED':
            return state;
        default:
            return state;
    }
};

export const student = combineReducers<Student, StudentAction> ({
    studentInfo
});

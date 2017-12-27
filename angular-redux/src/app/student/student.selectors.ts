import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.state';

export const getStudentState =  createFeatureSelector<StudentState>('students');

// tslint:disable-next-line:no-shadowed-variable
export const getUserInfo = createSelector(getStudentState, state => state.students);



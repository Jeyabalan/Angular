import { createFeatureSelector, createSelector } from '@ngrx/store/src/selector';
import { StudentState } from './student.state';

export const state =  createFeatureSelector<StudentState>('students');

// tslint:disable-next-line:no-shadowed-variable
export const getUserInfo = createSelector(state, state => state.students);



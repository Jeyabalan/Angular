import { createFeatureSelector, createSelector } from '@ngrx/store/src/selector';
import { State } from '@ngrx/store/src/state';
import { Student } from './app.state';

export const state = createFeatureSelector<Student>('student');

// tslint:disable-next-line:no-shadowed-variable
export const getStudentInfo = createSelector(state, state => state);


import { createFeatureSelector, createSelector } from '@ngrx/store/src/selector';
import { State } from '@ngrx/store/src/state';

export const state = createFeatureSelector<State>('student');

export const getStudentInfo = createSelector(state, state => state.student);


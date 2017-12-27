
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Student } from '../student.model';

export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_STUDENT_FULFILLED = 'FETCH_STUDENT_FULFILLED';
export const FETCH_STUDENT_ERROR = 'FETCH_STUDENT_ERROR';

export interface FetchStudentAction {
    type: typeof FETCH_STUDENT;
}

export interface FetchStudentFulFilledAction {
    type: typeof FETCH_STUDENT_FULFILLED;
    students: Student[];
}

export interface FetchStudentErrorAction {
    type: typeof FETCH_STUDENT_ERROR;
    error: HttpErrorResponse;
}

export type fetchStudentAction = () => FetchStudentAction;
export const fetchStudentAction: fetchStudentAction = () => ({ type: FETCH_STUDENT });

export type fetchStudentFulFilledAction = (students: Student[]) => FetchStudentFulFilledAction;
export const fetchStudentFulFilledAction: fetchStudentFulFilledAction = (students) =>
    ({ type: FETCH_STUDENT_FULFILLED, students });

export type fetchStudentErrorAction = (error: HttpErrorResponse) => FetchStudentErrorAction;
export const fetchStudentError: fetchStudentErrorAction = (error) =>
    ({ type: FETCH_STUDENT_ERROR, error });

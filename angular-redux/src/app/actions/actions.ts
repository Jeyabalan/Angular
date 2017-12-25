import { Student } from '../app.state';

export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_STUDENT_FULLFILLED = 'FETCH_STUDENT_FULLFILLED';
export const FETCH_STUDENT_ERROR = 'FETCH_STUDENT_ERROR';

export interface FetcStudentAction {
    type: typeof FETCH_STUDENT;
    student: Student;
}

export interface FetchStudentFullFilledAction {
    type: typeof FETCH_STUDENT_FULLFILLED;
}

export interface FetchStudentErrorAction {
    type: typeof FETCH_STUDENT_ERROR;
    error: Error;
}

export type fetchStudentAction = (student: Student) => FetcStudentAction;
export const fetchStudentAction: fetchStudentAction = (student) => ({ type: FETCH_STUDENT, student });

export type fetchStudentFullFilledAction = () => FetchStudentFullFilledAction;
export const fetchStudentFullFilledAction: fetchStudentFullFilledAction = () => ({ type: FETCH_STUDENT_FULLFILLED });

export type FetchStudentError = (error:  Error) => FetchStudentErrorAction;
export const FetchStudentError: FetchStudentError = (error) => ({ type: FETCH_STUDENT_ERROR, error });

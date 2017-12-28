import { Student } from '../student.model';
import { HttpErrorResponse } from '@angular/common/http/src/response';

export const CREATE_STUDENT = 'CREATE_STUDENT';
export const CREATE_STUDENT_FULFILLED = 'CREATE_STUDENT_FULFILLED';
export const CREATE_STUDENT_ERROR = 'CREATE_STUDENT_ERROR';

export interface CreateStudentAction {
    type: typeof CREATE_STUDENT;
    student: Student[];
}

export interface CreateStudentFulFilledAction {
    type: typeof CREATE_STUDENT_FULFILLED;
    newStudent: Student;
}

export interface CreateStudentErrorAction {
    type: typeof CREATE_STUDENT_ERROR;
    error: HttpErrorResponse;
}

export type createStudentAction = (student: Student[]) => CreateStudentAction;
export const createStudentAction: createStudentAction =
    (student) => ({ type: CREATE_STUDENT, student });

export type createStudentFulFilledAction = (newStudent: Student) => CreateStudentFulFilledAction;
export const createStudentFulFilledAction: createStudentFulFilledAction =
    (newStudent) => ({ type: CREATE_STUDENT_FULFILLED, newStudent });

export type createStudentErrorAction = (error: HttpErrorResponse) => CreateStudentErrorAction;
export const createStudentErrorAction: createStudentErrorAction =
    (error) => ({ type: CREATE_STUDENT_ERROR, error });

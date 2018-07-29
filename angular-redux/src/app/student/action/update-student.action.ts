import { Student } from '../student.model';

export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const UPDATE_STUDENT_FULFILLED = 'UPDATE_STUDENT_FULFILLED';
export const UPDATE_STUDENT_COUNT = 'UPDATE_STUDENT_COUNT';
export const UPDATE_STUDENT_COUNT_FULFILLED = 'UPDATE_STUDENT_COUNT_FULFILLED';

export interface UpdateStudentAction {
    type: typeof UPDATE_STUDENT;
    student: Student;
}

export interface UpdateStudentFulFilledAction {
    type: typeof UPDATE_STUDENT_FULFILLED;
    students: Student;
}

export interface UpdateStudentCountAction {
    type: typeof UPDATE_STUDENT_COUNT;
    id: string;
}

export interface UpdateStudentCountFulFiiledAction {
    type: typeof UPDATE_STUDENT_COUNT_FULFILLED;
    id: string;
}

export type updateStudentCountFulFiiledAction = (id: string) => UpdateStudentCountFulFiiledAction;
export const updateStudentCountFulFiiledAction: updateStudentCountFulFiiledAction =
    (id) => ({ type: UPDATE_STUDENT_COUNT_FULFILLED, id });

export type updateStudentCountAction = (id: string) => UpdateStudentCountAction;
export const updateStudentCountAction: updateStudentCountAction =
    (id) => ({ type: UPDATE_STUDENT_COUNT, id });

export type updateStudentAction = (student: Student) => UpdateStudentAction;
export const updateStudentAction: updateStudentAction =
    (student) => ({ type: UPDATE_STUDENT, student });

export type updateStudentFulFilledAction = (students: Student) => UpdateStudentFulFilledAction;
export const updateStudentFulFilledAction: updateStudentFulFilledAction =
    (students) => ({ type: UPDATE_STUDENT_FULFILLED, students });

import { Student } from '../app.state';

export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_STUDENT_FULLFILLED = 'FETCH_STUDENT_FULLFILLED';

export interface FetcStudentAction {
    type: typeof FETCH_STUDENT;
    student: Student;
}

export interface FetchStudentFullFilledAction {
    type: typeof FETCH_STUDENT_FULLFILLED;
}

export type fetchStudent = (student: Student) => FetcStudentAction;
export const fetchStudent: fetchStudent = (student) => ({ type: FETCH_STUDENT, student });

export type fetchStudentFullFillAction = () => FetchStudentFullFilledAction;
export const fetchStudentFullFillAction: fetchStudentFullFillAction = () => ({ type: FETCH_STUDENT_FULLFILLED });

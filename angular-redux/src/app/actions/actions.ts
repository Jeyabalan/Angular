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

export type studentInfo = (student: Student) => FetcStudentAction;
export const studentInfo: studentInfo = (student) => ({ type: FETCH_STUDENT, student });

export type studentFullFilled = () => FetchStudentFullFilledAction;
export const studentFullFilled: studentFullFilled = () => ({ type: FETCH_STUDENT_FULLFILLED });

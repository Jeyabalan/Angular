import { Student } from '../app.state';

export const FETCH_STUDENT = 'FETCH_STUDENT';

export interface FetcStudentAction {
    type: typeof FETCH_STUDENT;
    student: Student;
}

export type studentInfo = (student: Student) => FetcStudentAction;
export const studentInfo: studentInfo = (student) => ({ type: FETCH_STUDENT, student });

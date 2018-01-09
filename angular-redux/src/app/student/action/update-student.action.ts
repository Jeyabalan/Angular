import { Student } from '../student.model';

export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const UPDATE_STUDENT_FULFILLED = 'UPDATE_STUDENT_FULFILLED';

export interface UpdateStudentAction {
    type: typeof UPDATE_STUDENT;
    student: Student;
}

export interface UpdateStudentFulFilledAction {
    type: typeof UPDATE_STUDENT_FULFILLED;
    students: Student;
}

export type updateStudentAction = (student: Student) => UpdateStudentAction;
export const updateStudentAction: updateStudentAction =
    (student) => ({ type: UPDATE_STUDENT, student });

export type updateStudentFulFilledAction = (students: Student) => UpdateStudentFulFilledAction;
export const updateStudentFulFilledAction: updateStudentFulFilledAction =
    (students) => ({ type: UPDATE_STUDENT_FULFILLED, students });

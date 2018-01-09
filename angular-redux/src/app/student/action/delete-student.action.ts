import { Student } from '../student.model';

export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_STUDENT_FULFILLED = 'DELETE_STUDENT_FULFILLED';

export interface DeleteStudentAction {
    type: typeof DELETE_STUDENT;
    student: Student;
}

export interface DeleteStudentFulFilledAction {
    type: typeof DELETE_STUDENT_FULFILLED;
    students: Student;
}

export type deleteStudentAction = (student: Student) => DeleteStudentAction;
export const deleteStudentAction: deleteStudentAction =
    (student) => ({ type: DELETE_STUDENT, student });

export type deleteStudentFulFilledAction = (students: Student) => DeleteStudentFulFilledAction;
export const deleteStudentFulFilledAction: deleteStudentFulFilledAction =
    (students) => ({ type: DELETE_STUDENT_FULFILLED, students });

import { Student } from '../app.state';.

export const FETCH_USER = 'FETCH_USER';

export interface FetchUserAction {
    type: typeof FETCH_USER;
    student: Student;
}

export type student = () => FetchUserAction;
export const student: student = () => ({ FETCH_USER });

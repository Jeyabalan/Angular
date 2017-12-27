import { Student } from './student.model';

export interface StudentState {
    students: Student[];
    createStudent: Student[];
}

export const studentInitialState: StudentState = {
    students: [{id: 1, login: 'giribala14@gmail.com'}],
    createStudent: []
};

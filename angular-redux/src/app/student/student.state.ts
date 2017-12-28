import { Student } from './student.model';

export interface StudentState {
    students: Student[];
    createStudent: Student[];
}

export const studentInitialState: StudentState = {
    students: [],
    createStudent: []
};

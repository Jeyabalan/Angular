import { Student } from './student.model';

export interface StudentState {
    students: Student[];
}

export const studentInitialState: StudentState = {
    students: []
};

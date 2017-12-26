import { Student } from './student/student.model';
import { studentInitialState } from './student/student.state';

export interface AppState {
    students: Student[];
}

export const initialState: Partial<AppState> = {
    students: studentInitialState
};

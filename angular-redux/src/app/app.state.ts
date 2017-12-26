import { studentInitialState, StudentState } from './student/student.state';

export interface AppState {
    student: StudentState;
}

export const initialState: Partial<AppState> = {
    student: studentInitialState
};

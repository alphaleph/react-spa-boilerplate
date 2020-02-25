import * as constants from './redux/constants';

export interface AppState {
    darkMode: {
        isDarkMode: boolean;
    };
}

export interface BaseAction {
    type: string;
    payload?: any;
}

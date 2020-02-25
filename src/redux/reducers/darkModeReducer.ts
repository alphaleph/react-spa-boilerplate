import { DARK_MODE_ON, DARK_MODE_OFF } from '../constants';
import { BaseAction } from '../../types';

const initialState = {
    isDarkMode: false,
};

export const darkModeReducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case DARK_MODE_ON:
            return {
                ...state,
                isDarkMode: true,
            };
        case DARK_MODE_OFF:
            return {
                ...state,
                isDarkMode: false,
            };
        default:
            return state;
    }
};

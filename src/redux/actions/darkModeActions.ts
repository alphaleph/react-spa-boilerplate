import * as constants from '../constants';
import * as types from '../../types';

export const activateDarkMode = (/* data: DataType */) => {
    return {
        type: constants.DARK_MODE_ON,
        // payload: data,
    };
};

export const deactivateDarkMode = () => {
    return {
        type: constants.DARK_MODE_OFF,
    };
};

// export const testAsyncAction = () => async dispatch => {
//     dispatch(initAPICall());
//     try {
//         const url = 'Hello World';
//         const apiCall = await fetch(url);
//         const apiData = await apiCall.json();
//         dispatch(successAPICall(apiData));
//     } catch (err) {
//         dispatch(errorAPICall(err));
//     }
// };

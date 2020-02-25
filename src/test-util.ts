import { BaseAction } from './types';

export const defaultDispatch = (action: BaseAction) => {
    console.log(action);
};

export const defaultText = 'Hello World!';

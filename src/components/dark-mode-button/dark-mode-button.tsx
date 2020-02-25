import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    activateDarkMode,
    deactivateDarkMode,
} from '../../redux/actions/darkModeActions';
import { defaultDispatch } from '../../test-util';
import { BaseAction, AppState } from '../../types';
import './dark-mode-button.scss';

interface DarkModeButtonProps extends DarkModeButtonOwnProps {
    // Redux State
    isDarkMode?: boolean;
    // Redux Dispatch
    dispatch?: (action: BaseAction) => void;
}

interface DarkModeButtonOwnProps {
    text: string;
}

export const PureDarkModeButton = ({
    isDarkMode = false,
    dispatch = defaultDispatch,
    text,
}: DarkModeButtonProps) => {
    const toggleDarkMode = () => {
        isDarkMode
            ? dispatch(deactivateDarkMode())
            : dispatch(activateDarkMode());
    };

    return (
        <button
            className={isDarkMode ? 'is-dark' : 'is-light'}
            onClick={toggleDarkMode}
        >
            {text}
        </button>
    );
};

export const DarkModeButton = (props: DarkModeButtonOwnProps) => {
    const isDarkMode = useSelector((state: AppState) => {
        return state.darkMode.isDarkMode;
    });

    const dispatch = useDispatch();

    return (
        <PureDarkModeButton
            {...props}
            isDarkMode={isDarkMode}
            dispatch={dispatch}
        />
    );
};

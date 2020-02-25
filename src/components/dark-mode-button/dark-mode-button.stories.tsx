import React from 'react';
import { PureDarkModeButton } from './dark-mode-button';
import { BaseAction } from '../../types';
import '../../index.scss';
import './dark-mode-button.scss';

const darkModeButtonPropsFactory = (isDarkMode: boolean, text: string) => ({
    isDarkMode: isDarkMode,
    dispatch: (action: BaseAction) => {
        console.log(action);
    },
    text: text,
});

const defaultText = 'Hello World!';

export const defaultStory = () => (
    <PureDarkModeButton {...darkModeButtonPropsFactory(false, defaultText)} />
);

export const darkMode = () => (
    <PureDarkModeButton {...darkModeButtonPropsFactory(true, defaultText)} />
);

export default {
    title: 'DarkModeButton',
    component: PureDarkModeButton,
    includeStories: ['defaultStory', 'darkMode'],
};

import React from 'react';
import { App } from './app';
import '../../index.scss';
import './app.scss';

export const defaultTitle = 'Example Title';

export const defaultStory = () => <App debug={true} title={defaultTitle} />;

export default {
    title: 'App',
    component: App,
    includeStories: ['defaultStory'],
};

import React from 'react';
import logo from './logo.svg';
import {
    DarkModeButton,
    PureDarkModeButton,
} from '../dark-mode-button/dark-mode-button';
import './app.scss';

interface AppProps {
    debug?: boolean;
    title: string;
}

const darkModeButtonText = 'Toggle Dark Mode';

export const App = ({ debug = false, title }: AppProps) => {
    return (
        <div className="App">
            <button className="skip-nav test-class">Hello World!</button>
            {debug ? (
                <PureDarkModeButton text={darkModeButtonText} />
            ) : (
                <DarkModeButton text={darkModeButtonText} />
            )}
            <header className="App-header">
                <h1>{title}</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/app.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

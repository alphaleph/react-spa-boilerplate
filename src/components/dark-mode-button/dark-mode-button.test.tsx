import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PureDarkModeButton } from './dark-mode-button';
import { defaultText } from '../../test-util';

const testFn = jest.fn();

describe('DarkModeButton', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<PureDarkModeButton text={defaultText} />);
        expect(getByText(defaultText)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<PureDarkModeButton text={defaultText} />);
        expect(getByText(defaultText)).toBeVisible();
    });

    it('dispatches on click', () => {
        const { getByText } = render(
            <PureDarkModeButton text={defaultText} dispatch={testFn()} />
        );

        userEvent.click(getByText(defaultText));

        expect(testFn).toBeCalledTimes(1);
    });

    it('has not changed', () => {
        const { asFragment } = render(
            <PureDarkModeButton text={defaultText} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

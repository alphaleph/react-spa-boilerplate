import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { App } from './app';

// const testFn = jest.fn();
const mockTitle = 'Example title';

describe('App', () => {
    // afterEach(() => {
    //   jest.clearAllMocks();
    // });

    it('renders without crashing', () => {
        const { getByText } = render(<App debug={true} title={mockTitle} />);
        const linkElement = getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('renders correctly', () => {
        const { getByText } = render(<App debug={true} title={mockTitle} />);
        const linkElement = getByText(/learn react/i);
        expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
    });

    it('has not changed', () => {
        const { asFragment } = render(<App debug={true} title={mockTitle} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

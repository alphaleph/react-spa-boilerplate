const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
    addons: [
        {
            name: '@storybook/preset-create-react-app',
            options: {
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                },
            },
        },
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
    ],
};

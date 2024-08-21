/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

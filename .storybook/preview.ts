import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'grey',
      values: [
        {
          name: 'light',
          value: '#fff'
        },
        {
          name: 'grey',
          value: '#FAFAFB'
        }
      ]
    }
  }
};

export default preview;

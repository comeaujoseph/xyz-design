import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { initializeRTL } from 'storybook-addon-rtl';

// base css
import './index.scss';

initializeRTL();

// Global Decorators
// https://storybook.js.org/addons/introduction/#1-decorators
addDecorator(withA11y);
addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'shaded', value: '#f3f2f2' },
    { name: 'inverse', value: '#16325c' }
  ]
});

configure([
  require.context('../src/', true, /.stories\.(jsx|mdx)$/),
], module);


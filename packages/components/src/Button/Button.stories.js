import React from 'react';

import * as Button from './Button.bs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default { 
  title: 'Example/Button',
  component: Button,
} ;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => React.createElement(Button.make,args);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

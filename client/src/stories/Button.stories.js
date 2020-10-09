import React from 'react';
import { actions } from '@storybook/addon-actions'
import Button from '../components/LandingPage/GridImages/GridImageButton/GridImageButton';

export default {
  title: 'Grid-Button',
  component: Button,
};

export const DoSth = () => {
  return (
    <Button onClick={actions('clicked')}>Grid Button</Button>
  )
}

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

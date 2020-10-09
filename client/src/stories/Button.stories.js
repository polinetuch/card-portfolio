import React from 'react';
import { action } from '@storybook/addon-actions'
import GridImageButton from '../components/LandingPage/GridImages/GridImageButton/GridImageButton';

export default {
  title: 'Grid-Button',
  component: GridImageButton
};

export const DoSth = () => {
  return (
    <GridImageButton onClick={action('clicked')}/>
  )
}

// const Button = (args) => <Button {...args} />;

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

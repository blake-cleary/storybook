import React from 'react';
import {Button} from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
  shape: 'circle',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  shape: 'circle',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  shape: 'circle',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  shape: 'circle',
};

export const Squared = Template.bind({});
Squared.args = {
  size: 'small',
  label: 'Button',
  shape: 'squared',
};

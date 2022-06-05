import React from 'react';
import {Dropdown} from './Dropdown';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'dropdown',
};

export const Secondary = Template.bind({});
Secondary.args = {
    id: 'dropdown',
};

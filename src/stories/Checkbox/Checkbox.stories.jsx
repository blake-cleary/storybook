import React from "react";
import {Checkbox} from "./Checkbox";

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};

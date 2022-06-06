import React from "react";
import {TextBox} from "./TextBox";

export default {
    title: 'Example/TextBox',
    component: TextBox,
};

const Template = (args) => <TextBox {...args} />;

export const No_Label = Template.bind({});
No_Label.args = {
    width: '100px',
};

export const Label = Template.bind({});
Label.args = {
    label: 'Text Input Label',
    width: '100px',
};

export const Wide = Template.bind({});
Wide.args = {
    label: 'Text Input Label',
    width: '400px',
};

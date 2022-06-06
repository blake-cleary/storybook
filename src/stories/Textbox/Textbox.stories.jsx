import React from "react";
import {Textbox} from "./Textbox";

export default {
    title: 'Example/Textbox',
    component: Textbox,
};

const Template = (args) => <Textbox {...args} />;

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

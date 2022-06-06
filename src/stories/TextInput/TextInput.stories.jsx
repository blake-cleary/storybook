import React from "react";
import {TextInput} from "./TextInput";

export default {
    title: 'Example/TextInput',
    component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

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

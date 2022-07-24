import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input, { IInputProps } from './Input';
import { mockInputProps } from './Input.mocks';

export default {
  title: 'forms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as IInputProps;

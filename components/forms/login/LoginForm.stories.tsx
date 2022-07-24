import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm, { ILoginFormProps } from './LoginForm';
import { mockLoginFormProps } from './LoginForm.mocks';

export default {
  title: 'forms/LoginForm',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLoginFormProps.base,
} as ILoginFormProps;

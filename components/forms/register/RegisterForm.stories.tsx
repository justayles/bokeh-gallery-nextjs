import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterForm, { IRegisterFormProps } from './RegisterForm';
import { mockRegisterFormProps } from './RegisterForm.mocks';

export default {
  title: 'templates/RegisterForm',
  component: RegisterForm,
  argTypes: {},
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRegisterFormProps.base,
} as IRegisterFormProps;

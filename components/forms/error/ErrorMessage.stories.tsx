import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorMessage, { IErrorMessageProps } from './ErrorMessage';
import { mockErrorMessageProps } from './ErrorMessage.mocks';

export default {
  title: 'forms/ErrorMessage',
  component: ErrorMessage,
  argTypes: {},
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockErrorMessageProps.base,
} as IErrorMessageProps;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner, { ISpinner } from './Spinner';
import { mockSpinnerProps } from './Spinner.mocks';

export default {
  title: 'forms/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSpinnerProps.base,
} as ISpinner;

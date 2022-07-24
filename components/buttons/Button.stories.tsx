import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButtonProps } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'buttons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockButtonProps.base,
} as IButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockButtonProps.base,
  variant: 'secondary',
} as IButtonProps;

export const Loading = Template.bind({});
Loading.args = {
  ...mockButtonProps.base,
  variant: 'primary',
  loading: true,
} as IButtonProps;

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockButtonProps.base,
  disabled: true,
} as IButtonProps;

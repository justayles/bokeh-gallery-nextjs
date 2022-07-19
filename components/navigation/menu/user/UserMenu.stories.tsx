import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserMenu, { UserMenuProps } from './UserMenu';
import { mockUserMenuProps } from './UserMenu.mocks';

export default {
  title: 'menu/UserMenu',
  component: UserMenu,
  argTypes: {},
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockUserMenuProps.base,
} as UserMenuProps;

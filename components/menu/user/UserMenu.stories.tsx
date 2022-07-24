import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultValue } from 'context/auth/AuthContext';
import AuthStateDecorator from '../../../.storybook/decorators/AuthStateDecorator';
import UserMenu, { UserMenuProps } from './UserMenu';
import { mockUserMenuProps } from './UserMenu.mocks';

export default {
  title: 'menu/UserMenu',
  component: UserMenu,
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '80px',
          backgroundColor: 'black',
        }}
      >
        <Story />
      </div>
    ),
    AuthStateDecorator,
  ],
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockUserMenuProps.base,
} as UserMenuProps;

export const LoggedInUser = Template.bind({});
LoggedInUser.parameters = {
  authState: {
    ...defaultValue,
    authenticated: true,
    role: 'USER',
  },
};

LoggedInUser.args = {
  ...mockUserMenuProps.base,
} as UserMenuProps;

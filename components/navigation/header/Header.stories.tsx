import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultValue } from 'context/auth/AuthContext';
import AuthStateDecorator from '../../../.storybook/decorators/AuthStateDecorator';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'navigation/Header',
  component: Header,
  argTypes: {},
  decorators: [AuthStateDecorator],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});

export const LoggedInUser = Template.bind({});
LoggedInUser.parameters = {
  authState: {
    ...defaultValue,
    authenticated: true,
    role: 'USER',
  },
};

export const LoggedInAdmin = Template.bind({});
LoggedInAdmin.parameters = {
  authState: {
    ...defaultValue,
    authenticated: true,
    role: 'ADMIN',
  },
};

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainMenu, { MainMenuProps } from './MainMenu';
import { mockMainMenuProps } from './MainMenu.mocks';

export default {
  title: 'menu/MainMenu',
  component: MainMenu,
  argTypes: {},
} as ComponentMeta<typeof MainMenu>;

const Template: ComponentStory<typeof MainMenu> = (args) => (
  <MainMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMainMenuProps.base,
} as MainMenuProps;

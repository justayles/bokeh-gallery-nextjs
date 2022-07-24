import { ComponentMeta, ComponentStory } from '@storybook/react';
import BurgerMenu, { IBurgerMenu } from './BurgerMenu';
import { mockBurgerMenuProps } from './BurgerMenu.mocks';

export default {
  title: 'menu/BurgerMenu',
  component: BurgerMenu,
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'black',
          height: '80px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
} as ComponentMeta<typeof BurgerMenu>;

const Template: ComponentStory<typeof BurgerMenu> = (args) => (
  <BurgerMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBurgerMenuProps.base,
} as IBurgerMenu;

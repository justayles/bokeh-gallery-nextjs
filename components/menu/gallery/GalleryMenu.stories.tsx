import { ComponentMeta, ComponentStory } from '@storybook/react';
import GalleryMenu, { IGalleryMenuProps } from './GalleryMenu';
import { mockGalleryMenuProps } from './GalleryMenu.mocks';

export default {
  title: 'menu/GalleryMenu',
  component: GalleryMenu,
  argTypes: {},
} as ComponentMeta<typeof GalleryMenu>;

const Template: ComponentStory<typeof GalleryMenu> = (args) => (
  <GalleryMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockGalleryMenuProps.base,
} as IGalleryMenuProps;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import GalleryMenuItem, { IGalleryMenuItemProps } from './GalleryMenuItem';
import { mockGalleryMenuItemProps } from './GalleryMenuItem.mocks';

export default {
  title: 'menu/GalleryMenuItem',
  component: GalleryMenuItem,
  argTypes: {},
} as ComponentMeta<typeof GalleryMenuItem>;

const Template: ComponentStory<typeof GalleryMenuItem> = (args) => (
  <GalleryMenuItem {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockGalleryMenuItemProps.base,
} as IGalleryMenuItemProps;

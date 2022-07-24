import { ComponentMeta, ComponentStory } from '@storybook/react';
import GalleryMenuCategory, {
  IGalleryMenuCategoryProps,
} from './GalleryMenuCategory';
import { mockGalleryMenuCategoryProps } from './GalleryMenuCategory.mocks';

export default {
  title: 'menu/GalleryMenuCategory',
  component: GalleryMenuCategory,
  argTypes: {},
} as ComponentMeta<typeof GalleryMenuCategory>;

const Template: ComponentStory<typeof GalleryMenuCategory> = (args) => (
  <GalleryMenuCategory {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockGalleryMenuCategoryProps.base,
} as IGalleryMenuCategoryProps;

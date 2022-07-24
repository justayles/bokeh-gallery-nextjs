import { ComponentMeta, ComponentStory } from '@storybook/react';
import Carousel, { ICarouselProps } from './Carousel';
import { mockCarouselProps } from './Carousel.mocks';

export default {
  title: 'gallery/Carousel',
  component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCarouselProps.base,
} as ICarouselProps;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Overlay, { IOverlayProps } from './Overlay';
import { mockOverlayProps } from './Overlay.mocks';

export default {
  title: 'layouts/Overlay',
  component: Overlay,
  argTypes: {},
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockOverlayProps.base,
} as IOverlayProps;

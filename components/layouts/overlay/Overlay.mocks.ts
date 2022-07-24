import { IOverlayProps } from './Overlay';

const base: IOverlayProps = {
  isOpen: true,
  onClose: () => alert('close'),
  children: 'I am content',
};

export const mockOverlayProps = {
  base,
};

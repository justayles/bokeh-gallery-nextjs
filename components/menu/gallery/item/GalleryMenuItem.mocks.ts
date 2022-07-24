import { IGalleryLink } from 'types/galleryMenu';
import { IGalleryMenuItemProps } from './GalleryMenuItem';

const galleryMenuItem: IGalleryLink = {
  id: '12345',
  title: 'Gallery Link',
};

const base: IGalleryMenuItemProps = {
  item: galleryMenuItem,
};

export const mockGalleryMenuItemProps = {
  base,
};

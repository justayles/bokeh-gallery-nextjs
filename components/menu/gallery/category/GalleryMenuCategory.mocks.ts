import { IGalleryCategory } from 'types/galleryMenu';
import { IGalleryMenuCategoryProps } from './GalleryMenuCategory';

const galleryMenuCategory: IGalleryCategory = {
  id: '123',
  category: 'Category 1',
  parentId: '0',
  children: [],
};

const base: IGalleryMenuCategoryProps = {
  category: galleryMenuCategory,
  clickHandler: () => {},
};

export const mockGalleryMenuCategoryProps = {
  base,
};

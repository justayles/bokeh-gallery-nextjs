export interface IRawGalleryItem {
  public: boolean;
  active: boolean;
  members: string[];
  featured: boolean;
  _id: string;
  title: string;
  description: string;
  categoryID: string;
  categoryParentID: string;
  category: string;
  creator: string;
  thumbnail: string;
  created: string;
  __v: number;
}

export interface IGalleryLink {
  id: string;
  title: string;
}

export interface IGalleryCategory {
  id: string;
  category: string;
  parentId: string;
  children?: GalleryOrCategory;
}

export type GalleryOrCategory = Array<IGalleryCategory | IGalleryLink>;

// export interface IGalleryMenuCategory {
//   id: string;
//   category: string;
//   parentId: string;
//   children: GalleryOrCategory[];
// }

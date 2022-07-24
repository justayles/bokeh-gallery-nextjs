export interface IRawPhoto {
  exif_created: string;
  exif_make: string;
  exif_model: string;
  exif_iso: string;
  exif_fstop: string;
  exif_exposure: string;
  exif_aperture: string;
  exif_flash: string;
  _id: string;
  title: string;
  description: string;
  filepath: string;
  gallery: string;
  uploaded_date: string;
  thumbpath: string;
  __v: number;
}

export interface IGallery {
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
  thumbsize: any;
  created: string;
}

export interface IGalleryPhoto {
  exif_created: string;
  exif_make: string;
  exif_model: string;
  exif_iso: string;
  exif_fstop: string;
  exif_exposure: string;
  exif_aperture: string;
  exif_flash: string;
  id: string;
  title: string;
  description: string;
  filepath: string;
  gallery: string;
  uploaded_date: string;
  width: string;
  height: string;
  thumbpath: string;
  thumbSize: any;
  filepathSize: any;
}

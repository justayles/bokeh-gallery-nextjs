import { IGalleryCategory, IRawGalleryItem } from 'types/galleryMenu';

const formatGalleryMenu = (
  categoryData: IRawGalleryItem[]
): IGalleryCategory[] => {
  console.log('running formatGalleryMenu');
  const categories: IGalleryCategory[] = [];
  const categoryExists = (id: string) => {
    return categories.find((category) => category.id === id);
  };
  // first pass, we find all top level categories and write into new array...
  categoryData.map((item) => {
    if (item.categoryParentID === '0') {
      // check its not already in array first...
      if (!categoryExists(item.categoryID)) {
        // push item into new category array
        categories.push({
          id: item.categoryID,
          category: item.category,
          parentId: '0',
          children: [],
        });
      }
    }
  });
  // now we need to find all GALLERY ITEM children of each top level category...
  // to do this we loop through categories and then do an inner loop for each category
  categories.map((category) => {
    const needle = category.id;
    categoryData.map((gallery, idx) => {
      // push item into child array
      if (gallery.categoryID === needle) {
        // push item into new category array
        category.children?.push({
          id: gallery._id,
          title: gallery.title,
        });
      }
      // and now we can splice it from the original array too
      // categoryData.splice(idx - 1, 1);
    });
  });
  console.log(categories);
  console.log(categoryData);
  return categories;
};

export default formatGalleryMenu;

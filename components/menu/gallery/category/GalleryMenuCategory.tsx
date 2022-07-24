import { ArrowNarrowLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { IGalleryCategory } from 'types/galleryMenu';
import GalleryMenuItem from '../item/GalleryMenuItem';

export interface IGalleryMenuCategoryProps
  extends React.ComponentPropsWithoutRef<'li'> {
  category: IGalleryCategory;
  clickHandler: () => void;
}

const GalleryMenuCategory: React.FC<IGalleryMenuCategoryProps> = ({
  category,
  clickHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleVisibility = () => {
    setIsOpen(!isOpen);
    if (clickHandler) clickHandler();
  };
  const toggleChildVisibility = () => {
    setIsOpen(!isOpen);
  };
  const sortedList =
    category.children?.sort((a, b) => {
      if ('category' in a && 'category' in b === false) {
        return -1;
      } else {
        return 0;
      }
    }) || [];

  return (
    <li>
      <a
        href="#"
        className={`${isOpen ? 'hidden ' : 'menuCategory'}`}
        onClick={toggleVisibility}
      >
        {category.category}{' '}
        <ChevronRightIcon className="w-3 h-3 inline-block text-white" />
      </a>
      {/* isOpen: left-80   : hidden*/}
      <div className={`menuLevel ${isOpen ? 'left-80 visible' : 'invisible'}`}>
        <h2 className="menuHeader">{category.category}</h2>
        <a className="menuGoBack" onClick={toggleVisibility}>
          <ArrowNarrowLeftIcon className="w-4 h-4 mr-3 text-yellow-700 inline" />
          back
        </a>
        <ul>
          {sortedList.map((link) => {
            return 'category' in link ? (
              <GalleryMenuCategory
                category={link}
                key={link.id}
                clickHandler={toggleChildVisibility}
              />
            ) : (
              <GalleryMenuItem item={link} key={link.id} />
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default GalleryMenuCategory;

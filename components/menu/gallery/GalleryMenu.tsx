import React, { useState } from 'react';
import { GalleryOrCategory } from 'types/galleryMenu';
import GalleryMenuCategory from './category/GalleryMenuCategory';
import GalleryMenuItem from './item/GalleryMenuItem';

export interface IGalleryMenuProps extends React.ComponentPropsWithRef<'nav'> {
  links: GalleryOrCategory;
}

const GalleryMenu = React.forwardRef<HTMLElement, IGalleryMenuProps>(
  function GalleryMenu({ links }, ref) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleVisibility = () => {
      setIsOpen(!isOpen);
    };
    return (
      <nav
        className="absolute left-0 top-0 w-80 z-10 h-full transform -translate-x-80 bg-slate-700 overflow-hidden"
        ref={ref}
      >
        <div className={`menuLevel ${isOpen ? '' : '-left-80'}`}>
          <h2 className="menuHeader">Galleries</h2>
          <ul>
            {links.map((link) =>
              'category' in link ? (
                <GalleryMenuCategory
                  category={link}
                  key={link.id}
                  clickHandler={toggleVisibility}
                />
              ) : (
                <GalleryMenuItem item={link} key={link.id} />
              )
            )}
          </ul>
        </div>
      </nav>
    );
  }
);

export default GalleryMenu;

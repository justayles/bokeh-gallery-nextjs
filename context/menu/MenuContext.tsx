import { createContext, ReactNode, useState } from 'react';

interface IMenuContext {
  burgerMenuOpen: boolean;
  toggleBurgerMenu: () => void;
  userMenuOpen: boolean;
  toggleUserMenu: () => void;
  galleryMenuOpen: boolean;
  toggleGalleryMenu: () => void;
}

const defaultValue: IMenuContext = {
  burgerMenuOpen: false,
  toggleBurgerMenu: () => undefined,
  userMenuOpen: false,
  toggleUserMenu: () => undefined,
  galleryMenuOpen: false,
  toggleGalleryMenu: () => undefined,
};

const MenuContext = createContext<IMenuContext>(defaultValue);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(
    defaultValue.burgerMenuOpen
  );
  const toggleBurgerMenu = () => setBurgerMenuOpen(!burgerMenuOpen);
  const [userMenuOpen, setUserMenuOpen] = useState(defaultValue.userMenuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const [galleryMenuOpen, setGalleryMenuOpen] = useState(
    defaultValue.galleryMenuOpen
  );
  const toggleGalleryMenu = () => setGalleryMenuOpen(!galleryMenuOpen);

  return (
    <MenuContext.Provider
      value={{
        burgerMenuOpen,
        toggleBurgerMenu,
        userMenuOpen,
        toggleUserMenu,
        galleryMenuOpen,
        toggleGalleryMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

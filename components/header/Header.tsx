import { ArrowCircleLeftIcon, XCircleIcon } from '@heroicons/react/outline';
import BurgerMenu from 'components/menu/burger/BurgerMenu';
import MainMenu from 'components/menu/main/MainMenu';
import UserMenu from 'components/menu/user/UserMenu';
import AuthContext from 'context/auth/AuthContext';
import MenuContext from 'context/menu/MenuContext';
import {
  adminUserLinks,
  anonymousUserLinks,
  authenticatedUserLinks,
  userDropdownLinks,
} from 'lib/menu/links';
import Image from 'next/image';
import { useContext } from 'react';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const { authenticated, role } = useContext(AuthContext);
  const { galleryMenuOpen, toggleGalleryMenu } = useContext(MenuContext);
  const menuLinks = !authenticated
    ? anonymousUserLinks
    : role === 'ADMIN'
    ? adminUserLinks
    : authenticatedUserLinks;
  const menuUserLinks = !authenticated ? [] : userDropdownLinks;
  return (
    <header
      {...headerProps}
      className="w-full bg-black h-20 overflow-visible fixed z-20 top-0 left-0 right-0"
    >
      <div className="container flex justify-start items-center h-20 gap-10">
        {galleryMenuOpen && (
          <XCircleIcon
            className="h-6 w-6 text-white absolute left-5 cursor-pointer"
            onClick={toggleGalleryMenu}
          />
        )}
        {!galleryMenuOpen && (
          <ArrowCircleLeftIcon
            className="h-6 w-6 text-white absolute left-5 cursor-pointer"
            onClick={toggleGalleryMenu}
          />
        )}
        <Image src="/bokeh2.gif" alt="logo" width={127} height={48} priority />
        <MainMenu links={menuLinks} userLinks={menuUserLinks} />
        <BurgerMenu />
        <UserMenu links={menuUserLinks} />
      </div>
    </header>
  );
};

export default Header;

import { CogIcon, UserCircleIcon } from '@heroicons/react/solid';
import MenuContext from 'context/menu/MenuContext';
import useMenuHandler from 'hooks/use-menu-handler';
import Link from 'next/link';
import { useContext } from 'react';
import { IMainMenuItem } from '../main/MainMenu';

export interface UserMenuProps {
  links: IMainMenuItem[];
}

const UserMenu: React.FC<UserMenuProps> = ({ links }) => {
  const { userMenuOpen, toggleUserMenu } = useContext(MenuContext);
  const { handleClick, isAuthenticated, isAdmin, isUser } = useMenuHandler();
  const toggleClass = isAuthenticated
    ? 'hidden md:block absolute right-5 top-5 w-10 h-10 text-white cursor-pointer'
    : 'hidden';
  const menuClass =
    isAuthenticated && userMenuOpen
      ? 'hidden md:block text-white w-30 absolute right-0.5 top-20 mt-0.5'
      : 'hidden';
  return (
    <>
      <div className={toggleClass} onClick={toggleUserMenu}>
        {isAdmin && <CogIcon />}
        {isUser && <UserCircleIcon />}
      </div>
      <div className={menuClass}>
        <ul className="flex flex-col bg-black p-2">
          {links.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer text-right w-full"
              onClick={() => handleClick(item.action || null, toggleUserMenu)}
            >
              <Link href={item.url}>
                <a className="hover:underline">{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserMenu;

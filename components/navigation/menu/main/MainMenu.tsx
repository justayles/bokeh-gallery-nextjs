import MenuContext from 'context/menu/MenuContext';
import useMenuHandler from 'hooks/use-menu-handler';
import Link from 'next/link';
import { useContext } from 'react';

export interface IMainMenuItem {
  label: string;
  url: string;
  action?: string;
}

export interface MainMenuProps extends React.ComponentPropsWithoutRef<'nav'> {
  links: IMainMenuItem[];
  userLinks: IMainMenuItem[] | undefined;
}

const MainMenu: React.FC<MainMenuProps> = ({ links, userLinks }) => {
  const { burgerMenuOpen, toggleBurgerMenu } = useContext(MenuContext);
  const { handleClick, isAdmin, adminLabel, adminUrl } = useMenuHandler();
  const navClass = burgerMenuOpen
    ? 'bg-black block w-full'
    : 'bg-black hidden md:block w-full';

  return (
    <nav className={navClass}>
      <ul className="flex flex-col items-center absolute top-20 left-0 md:static md:flex-row md:justify-start md:gap-x-4 w-full">
        {links.map((item, idx) => (
          <li
            key={idx}
            className="text-white cursor-pointer text-center hover:bg-blue-900 md:hover:bg-transparent md:text-left w-full md:w-auto p-4 bg-blue-800 md:bg-transparent border-b border-black border-dotted"
            onClick={() => handleClick(item.action || null, toggleBurgerMenu)}
          >
            <Link href={item.url}>
              <a className="hover:underline">{item.label}</a>
            </Link>
          </li>
        ))}
        {userLinks &&
          userLinks.map((item, idx) => (
            <li
              key={`user-${idx}`}
              className="text-white cursor-pointer text-center hover:bg-blue-900 w-full p-4 bg-blue-800 border-b border-black border-dotted md:hidden"
              onClick={() => handleClick(item.action || null, toggleBurgerMenu)}
            >
              <Link href={item.url}>
                <a className="hover:underline">{item.label}</a>
              </Link>
            </li>
          ))}
        {isAdmin && (
          <li
            key="admin1"
            className="text-white cursor-pointer text-center hover:bg-blue-900 md:hover:bg-transparent md:text-left w-full p-4 bg-blue-800 md:bg-transparent border-b border-black border-dotted"
            onClick={toggleBurgerMenu}
          >
            <Link href={adminUrl}>
              <a className="hover:underline">{adminLabel}</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainMenu;

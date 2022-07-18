import Link from 'next/link';
import { useContext } from 'react';
import MenuContext from '../../../../context/menu/MenuContext';

export interface IMainMenuItem {
  label: string;
  url: string;
}

export interface MainMenuProps extends React.ComponentPropsWithoutRef<'nav'> {
  links: IMainMenuItem[];
}

const MainMenu: React.FC<MainMenuProps> = ({ links }) => {
  const { burgerOpen } = useContext(MenuContext);
  const navClass = burgerOpen ? 'bg-black block' : 'bg-black hidden md:block';
  return (
    <nav className={navClass}>
      <ul className="flex flex-col md:flex-row justify-start gap-x-4 w-full">
        {links.map((item, idx) => (
          <li key={idx} className="text-white">
            <Link href={item.url}>
              <a className="hover:underline">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

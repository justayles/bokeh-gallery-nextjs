import Link from 'next/link';

export interface IMainMenuItem {
  label: string;
  url: string;
}
export type MainMenuProps = {
  links: IMainMenuItem[];
};

const MainMenu: React.FC<MainMenuProps> = ({ links }) => {
  return (
    <nav className="bg-black">
      <ul className="flex justify-start gap-x-4">
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

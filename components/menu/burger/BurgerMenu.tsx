import MenuContext from 'context/menu/MenuContext';
import { useContext } from 'react';

export interface IBurgerMenu extends React.ComponentPropsWithoutRef<'div'> {}

const BurgerMenu: React.FC<IBurgerMenu> = () => {
  const { burgerMenuOpen, toggleBurgerMenu } = useContext(MenuContext);

  const line1Style = burgerMenuOpen
    ? 'transform transition duration-200 ease-in-out origin-left rotate-45 w-8 translate-x-1.5'
    : '';
  const line2Style = burgerMenuOpen ? 'bg-transparent' : 'bg-white';
  const line3Style = burgerMenuOpen
    ? 'transform transition duration-200 ease-in-out origin-left -rotate-45 w-8 translate-x-1.5'
    : '';
  return (
    <div className="bg-black w-10 h-8 absolute right-5 block md:hidden">
      <button
        type="button"
        aria-label="Burger Menu"
        onClick={toggleBurgerMenu}
        className="bg-black p-1 w-10 h-8"
      >
        <div className="space-y-2">
          <div className={`w-8 h-0.5 bg-white ${line1Style}`}></div>
          <div className={`w-8 h-0.5 ${line2Style}`}></div>
          <div className={`w-8 h-0.5 bg-white ${line3Style}`}></div>
        </div>
      </button>
    </div>
  );
};

export default BurgerMenu;

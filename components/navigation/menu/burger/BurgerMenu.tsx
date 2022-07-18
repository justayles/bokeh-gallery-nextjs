import { useContext } from 'react';
import MenuContext from '../../../../context/menu/MenuContext';

export interface IBurgerMenu extends React.ComponentPropsWithoutRef<'div'> {}

const BurgerMenu: React.FC<IBurgerMenu> = () => {
  const { burgerOpen, toggleBurger } = useContext(MenuContext);

  const line1Style = burgerOpen
    ? 'transform transition duration-200 ease-in-out origin-left rotate-45 w-7 translate-x-1.5'
    : '';
  const line2Style = burgerOpen ? 'bg-transparent' : 'bg-white';
  const line3Style = burgerOpen
    ? 'transform transition duration-200 ease-in-out origin-left -rotate-45 w-7 translate-x-1.5'
    : '';
  return (
    <div className="bg-black w-10 h-8 absolute right-10 block md:hidden">
      <button
        type="button"
        aria-label="Burger Menu"
        onClick={toggleBurger}
        className="bg-black p-1 w-6 h-8"
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

/* 

.header__menu-toggle {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  width: 20px;
  height: 30px;
  cursor: pointer;
  @include bp(m-up) {
    display: none;
  }


.burger {
    display: block;
    position: relative;
    width: 20px;
  }

  .burger__filling,
  .burger__inner:before,
  .burger__inner:after {
    transition-timing-function: ease;
    transition-duration: .15s;
    transition-property: transform;
  }

  .burger__filling {
    display: block;
    background-color: $white;
    width: 100%;
    height: 2px;
  }

  .burger__inner {

    &:before,
    &:after {
      content: '';
      display: block;
      background-color: $white;
      width: 100%;
      height: 2px;
      position: absolute;
      transition-timing-function: ease;
      transition-duration: .15s;
      transition-property: transform;
    }
    &:before {
      top: -10px;
      transition: top 75ms ease .12s, opacity 75ms ease;
    }
    &:after {
      bottom: -10px;
      transition: bottom 75ms ease .12s, transform 75ms cubic-bezier(.55,.055,.675,.19);
    }
  }

  .burger.is-active {
    .burger__inner:before {
      top: 0;
      transition: top 75ms ease, opacity 75ms ease .12s;
      opacity: 0;
    }
    .burger__inner:after {
      bottom: 0;
      transition: bottom 75ms ease, transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    .burger__filling {
      transition-delay: .12s;
      transition-timing-function: cubic-bezier(.215,.61,.355,1);
      -webkit-transform: rotate(-45deg);
      transform: rotate(45deg);
    }
  } */

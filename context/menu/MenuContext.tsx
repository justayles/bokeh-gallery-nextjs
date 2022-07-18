import { createContext, ReactNode, useState } from 'react';

interface IMenuContext {
  burgerOpen: boolean;
  toggleBurger: () => void;
}

const defaultValue: IMenuContext = {
  burgerOpen: false,
  toggleBurger: () => undefined,
};

const MenuContext = createContext<IMenuContext>(defaultValue);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [burgerOpen, setBurgerOpen] = useState(defaultValue.burgerOpen);
  const toggleBurger = () => setBurgerOpen(!burgerOpen);

  return (
    <MenuContext.Provider value={{ burgerOpen, toggleBurger }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

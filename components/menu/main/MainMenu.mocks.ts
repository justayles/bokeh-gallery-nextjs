import { anonymousUserLinks, userDropdownLinks } from 'lib/menu/links';
import { MainMenuProps } from './MainMenu';

const base: MainMenuProps = {
  links: anonymousUserLinks,
  userLinks: userDropdownLinks,
};

export const mockMainMenuProps = {
  base,
};

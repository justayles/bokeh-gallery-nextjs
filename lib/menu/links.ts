import { IMainMenuItem } from 'components/navigation/menu/main/MainMenu';

export const anonymousUserLinks: IMainMenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Galleries', url: '/galleries' },
  { label: 'Login', url: '/login' },
  { label: 'Register', url: '/register' },
  { label: 'Contact', url: '/contact' },
];

export const authenticatedUserLinks: IMainMenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Galleries', url: '/galleries' },
  { label: 'Contact', url: '/contact' },
];

export const adminUserLinks: IMainMenuItem[] = [
  { label: 'Home', url: '/admin' },
  { label: 'Galleries', url: '/admin/gallery/list' },
  { label: 'Users', url: '/admin/user/list' },
];

export const userDropdownLinks: IMainMenuItem[] = [
  { label: 'Profile', url: '/profile' },
  { label: 'Change language', url: '#', action: 'language' },
  { label: 'Logout', url: '#', action: 'logout' },
];

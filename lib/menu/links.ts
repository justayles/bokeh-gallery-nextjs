import { IMainMenuItem } from 'components/menu/main/MainMenu';

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

export const galleryLinks: any = [
  {
    id: '5fce9391d8ff181d349587f6',
    parentId: '0',
    category: 'Travel',
    children: [
      {
        id: '6033f9c61abfe54439adbe8e',
        title: 'Italy',
        categoryID: '5fce9391d8ff181d349587f6',
        categoryParentID: '0',
      },
      {
        id: '5fce93fad8ff181d349587f7',
        title: 'Japan',
        categoryID: '5fce9391d8ff181d349587f6',
        categoryParentID: '0',
      },
      {
        id: '5fce9391d8ff181d349587f9',
        parentId: '5fce9391d8ff181d349587f6',
        category: 'Space',
        children: [
          {
            id: '6033f9c61abfe54439adbe8e24',
            title: 'Mars',
            categoryID: '5fce9391d8ff181d349587f9',
            categoryParentID: '5fce9391d8ff181d349587f6',
          },
          {
            id: '5fce9391d8ff181d349587f7345',
            parentId: '5fce9391d8ff181d349587f9',
            category: 'Milky Way',
            children: [
              {
                id: '6033f9c61abfe54439adbe8e3454351',
                title: 'Nebulus 4',
                categoryID: '5fce9391d8ff181d349587f7345',
                categoryParentID: '5fce9391d8ff181d349587f9',
              },
              {
                id: '5fce93fad8ff181d349587f7345349',
                title: 'Nebulus 2',
                categoryID: '5fce9391d8ff181d349587f7345',
                categoryParentID: '5fce9391d8ff181d349587f9',
              },
              {
                id: '6033f9c61abfe54439adbe8e345435',
                title: 'Nebulus 3',
                categoryID: '5fce9391d8ff181d349587f7345',
                categoryParentID: '5fce9391d8ff181d349587f9',
              },
              {
                id: '5fce93fad8ff181d349587f7345345',
                title: 'Nebulus 1',
                categoryID: '5fce9391d8ff181d349587f7345',
                categoryParentID: '5fce9391d8ff181d349587f9',
              },
            ],
          },
          {
            id: '5fce93fad8ff181d349587f23',
            title: 'Jupiter',
            categoryID: '5fce9391d8ff181d349587f9',
            categoryParentID: '5fce9391d8ff181d349587f6',
          },
        ],
      },
    ],
  },
  {
    id: '5fce9391d8ff181d349587f7',
    parentId: '0',
    category: 'Nature',
    children: [
      {
        id: '6033f9c61abfe54439adbe8e',
        title: 'Frogs',
        categoryID: '5fce9391d8ff181d349587f7',
        categoryParentID: '0',
      },
      {
        id: '5fce93fad8ff181d349587f7',
        title: 'Flowers',
        categoryID: '5fce9391d8ff181d349587f7',
        categoryParentID: '0',
      },
    ],
  },
  {
    id: '6033f9c61abfe54439adbe8e2',
    title: 'Other',
    categoryID: '0',
    categoryParentID: '0',
  },
];

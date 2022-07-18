import { BeakerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { anonymousUserLinks } from '../../../lib/menu/links';
import BurgerMenu from '../menu/burger/BurgerMenu';
import MainMenu from '../menu/main/MainMenu';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps} className="w-full bg-black h-20">
      <div className="container flex justify-start items-center h-20 gap-10">
        <BeakerIcon className="h-5 w-5 text-white absolute left-10" />
        <Image src="/bokeh2.gif" alt="logo" width={127} height={48} priority />
        <MainMenu links={anonymousUserLinks} />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

// {/*

//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#">User Profile</a>
//        </li>
//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#">Change Language</a>
//        </li>
//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#" (click)="logout($event)">Logout</a>
//        </li>
//        <li [hidden]="!isAdminRole">
//          <a [routerLink]="['/admin']" (click)="switchAdminView()"
//            >[ Admin Panel ]</a
//          >
//        </li>
//      </ul>

//      <ul
//        class="menu__list"
//        [ngClass]="{ admin: isAdminRole }"
//        [hidden]="!isAdminView || !isAdminRole"
//      >
//        <li><i class="fas fa-kiwi-bird"></i></li>
//        <li><a [routerLink]="['/admin']">Home</a></li>
//        <li><a [routerLink]="['/admin', 'photos']">Photos</a></li>
//        <li><a [routerLink]="['/admin', 'gallery']">Galleries</a></li>
//        <li><a [routerLink]="['/admin', 'users']">Users</a></li>
//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#">User Profile</a>
//        </li>
//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#">Change Language</a>
//        </li>
//        <li class="menu__list-user" [hidden]="!isLoggedIn">
//          <a href="#" (click)="logout($event)">Logout</a>
//        </li>
//        <li>
//          <a routerLink="['/']" (click)="switchAdminView()"
//            >[ Return to site ]</a
//          >
//        </li>
//      </ul>
//    </nav> */}

// <header class="header" [ngClass]="{ loggedin: isLoggedIn }">
//   <div class="container">
//     <div class="header__toggle">
//       <a
//         id="trigger"
//         [hidden]="isBurgerActive"
//         [ngClass]="{ 'is-active': isCameraActive }"
//       >
//         <i class="fas fa-camera" click="toggleCamera()"></i>
//       </a>
//     </div>

//     <nav
//       class="header__menu menu js-menu"
//       [ngClass]="{ 'is-active': isBurgerActive }"
//     >
//       <ul
//         class="menu__list"
//         [ngClass]="{ admin: isAdminRole }"
//         [hidden]="isAdminView"
//       >
//         <li class="menu__list-logo">
//           <i class="fas fa-frog"></i><span>Gallery frog</span>
//         </li>
//         <li><a [routerLink]="['/']">Home</a></li>
//         <li><a [routerLink]="['/gallery']">Galleries</a></li>
//         <li [hidden]="isLoggedIn && !isAnonymousRole">
//           <a [routerLink]="['/auth', 'login']">Login</a>
//         </li>
//         <li [hidden]="isLoggedIn">
//           <a [routerLink]="['/auth', 'register']">Register</a>
//         </li>
//         <li><a [routerLink]="['/contact']">Contact</a></li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#">User Profile</a>
//         </li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#">Change Language</a>
//         </li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#" (click)="logout($event)">Logout</a>
//         </li>
//         <li [hidden]="!isAdminRole">
//           <a [routerLink]="['/admin']" (click)="switchAdminView()"
//             >[ Admin Panel ]</a
//           >
//         </li>
//       </ul>

//       <ul
//         class="menu__list"
//         [ngClass]="{ admin: isAdminRole }"
//         [hidden]="!isAdminView || !isAdminRole"
//       >
//         <li><i class="fas fa-kiwi-bird"></i></li>
//         <li><a [routerLink]="['/admin']">Home</a></li>
//         <li><a [routerLink]="['/admin', 'photos']">Photos</a></li>
//         <li><a [routerLink]="['/admin', 'gallery']">Galleries</a></li>
//         <li><a [routerLink]="['/admin', 'users']">Users</a></li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#">User Profile</a>
//         </li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#">Change Language</a>
//         </li>
//         <li class="menu__list-user" [hidden]="!isLoggedIn">
//           <a href="#" (click)="logout($event)">Logout</a>
//         </li>
//         <li>
//           <a routerLink="['/']" (click)="switchAdminView()"
//             >[ Return to site ]</a
//           >
//         </li>
//       </ul>
//     </nav>

//     <div
//       class="header__user"
//       [hidden]="!isLoggedIn"
//       [ngClass]="{ 'is-active': isUserDropdownActive }"
//       (click)="toggleUserDropdown($event)"
//     >
//       <i class="fas fa-user-cog" [hidden]="!isAdminView"></i>
//       <i class="fa fa-user-circle" [hidden]="isAdminView"></i>
//       <div class="header__user-dropdown">
//         <span class="pointer"></span>
//         <ul>
//           <li><a href="#">profile</a></li>
//           <li><a href="#">language</a></li>
//           <li><a (click)="logout($event)">logout</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </header>

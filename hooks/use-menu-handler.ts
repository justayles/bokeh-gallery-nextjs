import AuthContext from 'context/auth/AuthContext';
import { useContext } from 'react';

const useMenuHandler = () => {
  const { authenticated, role, logout } = useContext(AuthContext);
  // admin roles only
  const isAuthenticated = authenticated;
  const isAdmin = role === 'ADMIN';
  const isUser = role === 'USER';
  //const isAdminSite = document.location.href.indexOf('/admin') > -1;
  const isAdminSite = false;
  const adminLabel = isAdminSite
    ? '[ return to site ]'
    : '[ go to admin site ]';
  const adminUrl = isAdminSite ? '/admin' : '/';
  // lang selector
  const doLanguage = () => {
    alert('language');
  };

  // catch all click and delegate if needed
  const handleClick = (action: string | null, callbackFn: () => void) => {
    // event.preventDefault();
    if (action && action === 'logout') logout();
    if (action && action === 'language') doLanguage();
    callbackFn();
  };

  return {
    handleClick,
    isAuthenticated,
    isUser,
    isAdmin,
    adminLabel,
    adminUrl,
  };
};

export default useMenuHandler;

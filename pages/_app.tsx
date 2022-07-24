import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth/AuthContext';
import { MenuProvider } from '../context/menu/MenuContext';
import '../styles/globals.css';
import { NextPageWithLayout } from '../types/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MenuProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </MenuProvider>
  );
}

export default MyApp;

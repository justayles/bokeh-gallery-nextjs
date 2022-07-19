import Header from 'components/navigation/header/Header';
import MenuContext from 'context/menu/MenuContext';
import useClickOutside from 'hooks/use-click-outside';
import Head from 'next/head';
import { useCallback, useContext, useRef } from 'react';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const { galleryMenuOpen, toggleGalleryMenu } = useContext(MenuContext);
  const toggleClass = galleryMenuOpen ? 'translate-x-80' : '';
  const containerClass = galleryMenuOpen ? 'ml-5' : '';

  const clickCallback = useCallback(() => {
    if (galleryMenuOpen) {
      toggleGalleryMenu();
    }
  }, [galleryMenuOpen, toggleGalleryMenu]);

  useClickOutside(sideMenuRef, clickCallback);

  return (
    <>
      <Head>
        <title>Bokeh Gallery</title>
      </Head>
      <Header />
      <main className="h-screen relative overflow-hidden ">
        <div
          className={`absolute w-full h-full transform transition-all ${toggleClass} top-20`}
        >
          <nav
            className="absolute left-0 top-0 w-80 z-10 h-full transform -translate-x-80 bg-blue-800"
            ref={sideMenuRef}
          >
            howdy
          </nav>
          <div className="h-full overflow-x-hidden overflow-y-scroll relative py-24">
            <div className="relative">
              <div className={`container ${containerClass}`}>{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrimaryLayout;

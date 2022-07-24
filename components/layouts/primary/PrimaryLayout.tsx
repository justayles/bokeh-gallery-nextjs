import Header from 'components/header/Header';
import GalleryMenu from 'components/menu/gallery/GalleryMenu';
import MenuContext from 'context/menu/MenuContext';
import useClickOutside from 'hooks/use-click-outside';
import useGetGalleryMenu from 'hooks/use-get-gallery-menu';
import Head from 'next/head';
import React, { useCallback, useContext, useRef } from 'react';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const { galleryMenuOpen, toggleGalleryMenu } = useContext(MenuContext);
  const toggleClass = galleryMenuOpen ? 'translate-x-80' : '';
  const containerClass = galleryMenuOpen ? 'ml-5' : '';
  const { galleries, isLoading } = useGetGalleryMenu();

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
          <GalleryMenu links={galleries} ref={sideMenuRef} />
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

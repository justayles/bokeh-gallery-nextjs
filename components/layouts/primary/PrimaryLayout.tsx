import Head from 'next/head';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>Bokeh Gallery</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col items-center`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
};

export default PrimaryLayout;

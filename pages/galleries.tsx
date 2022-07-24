import GalleryImage from 'components/gallery/image/GalleryImage';
import { GetStaticProps } from 'next';
import { IGallery } from 'types/gallery';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../types/page';

export interface IGalleryProps {
  galleries: IGallery[];
}

export const getStaticProps: GetStaticProps = async () => {
  let galleries: IGallery[];

  const galleryData = await fetch(
    `${process.env.NEXT_PUBLIC_API}/gallery-api/public`
  );
  galleries = await galleryData.json();

  return {
    props: {
      galleries,
    },
  };
};

const Galleries: NextPageWithLayout<IGalleryProps> = ({ galleries }) => {
  const hasResults = galleries.length > 0;
  return (
    <section>
      <h1 className="h1">Hello Gallery Viewer</h1>
      <p className="para mb-8">
        Check out some of these curated galleries below..
      </p>
      {hasResults ? (
        <div className="columns-2 md:columns-3 lg:columns-5 xl:columns-6">
          {galleries.map((gallery) => (
            <div key={gallery._id}>
              <div className="bg-black mb-7">
                <GalleryImage
                  src={`/uploads/${gallery.title}_${gallery._id}/${gallery.thumbnail}`}
                  title={gallery.title}
                />
                <span className="h2 p-0 m-0 pl-2 pb-2 text-white inline-block">
                  {gallery.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="para">No results found.</p>
      )}
    </section>
  );
};

export default Galleries;

Galleries.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

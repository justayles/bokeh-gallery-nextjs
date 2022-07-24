import GalleryImage from 'components/gallery/image/GalleryImage';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IGallery, IRawPhoto } from 'types/gallery';
import { NextPageWithLayout } from '../../types/page';

export interface IGalleryProps {
  galleryData: IGallery;
  galleryPhotos: IRawPhoto[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await fetch(
    `${process.env.NEXT_PUBLIC_API}/gallery-api/public`
  );
  const galleriesData: IGallery[] = await galleries.json();
  const paths = galleriesData.map((gallery) => {
    return {
      params: {
        id: gallery._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let galleryData: IGallery;
  let galleryPhotos: IRawPhoto[] = [];

  const galleryDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API}/gallery-api/${params?.id}`
  );
  galleryData = await galleryDataResponse.json();

  const galleryPhotosResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API}/photos-api/gallery/${params?.id}`
  );
  galleryPhotos = await galleryPhotosResponse.json();

  return {
    props: {
      galleryData,
      galleryPhotos,
    },
  };
};

const Gallery: NextPageWithLayout<IGalleryProps> = ({
  galleryData,
  galleryPhotos,
}) => {
  console.log(galleryPhotos);
  const hasPhotos = galleryPhotos.length > 0;
  return (
    <section>
      <h1 className="h1">{galleryData.title}</h1>
      <p className="para mb-8">{galleryData.description}</p>
      <div>
        {hasPhotos ? (
          <div className="columns-2 md:columns-3 lg:columns-5 xl:columns-6">
            {galleryPhotos.map((photo) => (
              <div key={photo._id} className="mb-3">
                <GalleryImage
                  title={photo.title}
                  src={`/uploads/${photo.thumbpath}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="para">No photos were found. BOO :</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;

Gallery.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

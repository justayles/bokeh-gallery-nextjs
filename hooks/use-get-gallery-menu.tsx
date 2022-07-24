import formatGalleryMenu from 'lib/menu/formatGalleryMenu';
import { useEffect, useState } from 'react';
import { IGalleryCategory } from 'types/galleryMenu';

const useGetGalleryMenu = () => {
  const [galleries, setGalleries] = useState<IGalleryCategory[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API}/gallery-api/public`)
      .then((res) => res.json())
      .then((data) => {
        const preparedData = formatGalleryMenu(data);
        setGalleries(preparedData);
        setLoading(false);
      });
  }, []);

  return {
    galleries,
    isLoading,
  };
};

export default useGetGalleryMenu;

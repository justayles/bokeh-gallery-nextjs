import Image from 'next/image';
import { FC, useState } from 'react';

interface IGalleryImageProps {
  title: string;
  src: string;
}

const GalleryImage: FC<IGalleryImageProps> = ({ title, src }) => {
  const [paddingTop, setPaddingTop] = useState('0');

  return (
    <div className="w-full relative inline-block" style={{ paddingTop }}>
      <Image
        alt={title}
        src={src}
        layout="fill"
        objectFit="contain"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
        }}
      />
    </div>
  );
};

export default GalleryImage;

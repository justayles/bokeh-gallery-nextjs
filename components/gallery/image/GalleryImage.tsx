import Image from 'next/image';
import { FC, useState } from 'react';

interface IGalleryImageProps {
  title: string;
  src: string;
  onClick?: () => void;
}

const GalleryImage: FC<IGalleryImageProps> = ({ title, src, onClick }) => {
  const [paddingTop, setPaddingTop] = useState('0');
  const imgClass = onClick
    ? 'w-full relative inline-block cursor-pointer'
    : 'w-full relative inline-block cursor-pointer border-4 border-white mx-auto';
  return (
    <div className={imgClass} style={{ paddingTop }} onClick={onClick}>
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

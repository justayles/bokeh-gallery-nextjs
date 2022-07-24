import { IRawPhoto } from 'types/gallery';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { A11y, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import GalleryImage from '../image/GalleryImage';

export interface ICarouselProps {
  items: IRawPhoto[];
}

const Carousel: React.FC<ICarouselProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      navigation
      // spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide key={item._id}>
          <GalleryImage title={item.title} src={`/uploads/${item.filepath}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

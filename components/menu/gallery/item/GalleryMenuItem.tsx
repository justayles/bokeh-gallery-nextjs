import Link from 'next/link';
import { IGalleryLink } from 'types/galleryMenu';

export interface IGalleryMenuItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  item: IGalleryLink;
}

const GalleryMenuItem: React.FC<IGalleryMenuItemProps> = ({ item }) => {
  const closeMenu = () => {
    alert('close menu');
  };
  return (
    <li>
      <Link href={`/gallery/${item.id}`} onClick={closeMenu}>
        <a className="menuCategory">{item.title}</a>
      </Link>
    </li>
  );
};

export default GalleryMenuItem;

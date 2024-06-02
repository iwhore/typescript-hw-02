import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

interface ImageGalleryProps {
  listImages: Image[];
  openModal: (bigImg: string, alt: string) => void;
}

export default function ImageGallery({
  listImages,
  openModal,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {listImages.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard onClick={openModal} image={item} />
          </li>
        );
      })}
    </ul>
  );
}

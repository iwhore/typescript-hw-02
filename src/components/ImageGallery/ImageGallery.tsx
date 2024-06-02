import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";


interface ImageGalleryProps {
  listImages: Image[];
  openModal: (bigImg: string, alt: string) => void;
}

export default function ImageGallery({
  listImages,
  openModal,
}: ImageGalleryProps) {
  return (
    <ul>
      {listImages.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard onClick={openModal} image={item} />
          </li>
        );
      })}
    </ul>
  );
}

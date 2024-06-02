import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: {
      small: string;
      regular: string;
    };
    description: string;
  };
  onClick: (bigImg: string, alt: string) => void;
}

export default function ImageCard({
  image: { urls, description },
  onClick,
}: ImageCardProps) {
  return (
    <div className={css.img}>
      <img
        onClick={() => onClick(urls.regular, description)}
        src={urls.small}
        alt={description}
        width="250"
        height="200"
      />
    </div>
  );
}
//

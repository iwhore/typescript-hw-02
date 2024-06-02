import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "../../images-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { Image } from "../../types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const openModal = (bigImg: string, alt: string): void => {
    setSelectedImage(bigImg);
    setDescription(alt);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage("");
    setDescription("");
    setModalIsOpen(false);
  };

  const handleQuery = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages<T>(): Promise<void> {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery listImages={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        modalImg={selectedImage}
        alt={description}
        closeModal={closeModal}
      />

      <Toaster />
    </>
  );
}

import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  modalImg: string;
  alt: string;
  closeModal: () => void;
}

export default function ImageModal({
  isOpen,
  modalImg,
  closeModal,
  alt,
}: ImageModalProps) {
  Modal.setAppElement(document.body);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <img src={modalImg} alt={alt} width="1000" height="800" />
        <p>{alt}</p>
      </Modal>
    </div>
  );
}

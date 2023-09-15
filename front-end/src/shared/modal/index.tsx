import { ReactNode } from "react";
import "./styles.css";

interface props {
  children: ReactNode;
  isOpen: boolean;
  onModalClose: () => void;
}

const Modal = ({ children, isOpen, onModalClose }: props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleModal = (e: any) => {
    if (e.target.id === "modal") {
      onModalClose();
    }
  };

  return (
    <div
      onClick={(e) => handleModal(e)}
      style={{ display: isOpen ? "block" : "none" }}
      id="modal"
      className="modal-container"
    >
      {children}
    </div>
  );
};

export default Modal;

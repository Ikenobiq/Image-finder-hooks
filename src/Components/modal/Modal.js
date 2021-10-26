import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
const Modal = ({ largeImageURL, tags, closeModal }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );
  const hendleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="Overlay" onClick={hendleOverlay}>
      <div className="Modal" onClick={hendleOverlay}>
        <img src={largeImageURL} alt={tags} className="modal-img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Modal;

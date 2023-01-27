import ReactModal from "react-modal";
import { IModal } from "./IModal";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-icon.svg";
import TextButton from "../button/TextButton";

// STUB: for accessibility
ReactModal.setAppElement("#root");

const Modal = ({ isModal, closeModal, urlParam, title }: IModal) => {
  let url = `https://youtube.com/embed/${urlParam}`;
  return (
    <ReactModal
      isOpen={isModal}
      onRequestClose={closeModal}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <section className="trailer">
        <div className="trailer-header">
          <h4>{title}</h4>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="trailer-body">
          <iframe
            src={urlParam !== null ? url : ""}
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
        <div className="trailer-footer">
          <TextButton title="close" closeModal={closeModal} />
        </div>
      </section>
    </ReactModal>
  );
};

export default Modal;

import React, { useEffect, useRef } from "react";
import "./Modal.scss";
import CancelIcon from '@mui/icons-material/Cancel';
import Button from "../Button/Button";
import Headline from "../Headline/Headline";

// Based frame for Modal
const Modal = ({ children, className, show, onHide, size }) => {
  const modalRef = useRef();

  const handleClose = (event) => {
    if (
      (!modalRef.current.contains(event.target) &&
        event.target.classList.contains(".MuiPickersDay-root")) ||
      event.target.classList.contains("modal-container")
    ) {
      onHide();
    }

    // Check if the clicked element or its parent contains the 'cancel-mark' class
    if (
      event.target.classList.contains("cancel-mark") ||
      event.target.closest(".cancel-mark")
    ) {
      onHide(); // Call onHide when the cancel button or its parent is clicked
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onHide(); // Call onHide when the escape key is pressed
      }
    };

    if (show) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, [show, onHide]);

  return (
    <div data-testid="modal-test">
      <div
        className={`modal-container ${show ? "opened" : "close"}`}
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        <div
          className={`modal ${className} ${show ? "modal-show" : "modal-closed"
            } ${size}`}
          ref={modalRef}
          onClick={handleClose}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Modal Header
const ModalHeader = ({ content, className }) => {
  return (
    <div data-testid="modal-test-header">
      <div className={`modal-header ${className}`}>
        <Headline
          content={content}
          type={"h4"}
          className="modal-title"
        />
        <Button
          className="cancel-mark bg-transparent border-0"
          variant={"icon-layout"}
          onlyIcon={<CancelIcon />}
          type={"button"}
        />
      </div>
    </div>
  );
};

// Modal Body
const ModalBody = ({ children }) => {
  return <div data-testid="modal-test-body" className="modal-body">{children}</div>;
};

// Modal Footer
const ModalFooter = ({ children, className }) => {
  return <div className={`modal-footer ${className}`}>{children}</div>;
};

Modal.defaultProps = {
  size: "sm",
};

ModalHeader.defaultProps = {
  content: "New Content",
  icon: <CancelIcon />,
};

export { Modal, ModalHeader, ModalBody, ModalFooter };

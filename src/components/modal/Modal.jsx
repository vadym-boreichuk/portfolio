import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

import React, { useState } from "react";
import "react-resizable/css/styles.css";
import DraggableResizableModal from "./DraggableResizableModal";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openSecondModal = () => {
    setIsOpenSecond(true);
  };

  const closeSecondModal = () => {
    setIsOpenSecond(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            overflow: "hidden",
            width: "90%",
            height: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          >
            <div
              className="modal-header"
              style={{
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderBottom: "1px solid #ddd",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: 0 }}>Normal Modal</h4>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "black",
                  fontSize: "20px",
                }}
                onClick={closeModal}
              >
                ✖
              </button>
            </div>
            <div style={{ padding: "20px", flex: 1 }}>
              <p>This is a normal modal.</p>
              <p>
                You can open the secondary modal by clicking the close icon.
              </p>
              <button onClick={openSecondModal}>Close Modal</button>
            </div>
          </div>
        </div>
      )}
      {isOpenSecond && <DraggableResizableModal onClose={closeSecondModal} />}
    </>
  );
};

export default Modal;

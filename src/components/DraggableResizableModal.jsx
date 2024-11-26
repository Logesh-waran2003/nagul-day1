import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const DraggableResizableModal = ({ onClose }) => {
  const [modalSize, setModalSize] = useState({ width: 400, height: 300 });
  const [modalPosition, setModalPosition] = useState({ top: 50, left: 50 });

  const handleResize = (e, data) => {
    const { width, height } = data.size;
    const deltaHeight = modalSize.height - height;

    setModalSize({ width, height });

    // Adjust the modal's position if resizing from the top
    if (data.handle === "n") {
      setModalPosition((prev) => ({
        ...prev,
        top: prev.top + deltaHeight,
      }));
    }
    // Adjust the modal's position if resizing from the left
    if (data.handle === "w") {
      const deltaWidth = modalSize.width - width;
      setModalPosition((prev) => ({
        ...prev,
        left: prev.left + deltaWidth,
      }));
    }
  };

  return (
    <>
      <Draggable handle=".modal-header">
        <div
          style={{
            position: "fixed",
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <ResizableBox
            width={modalSize.width}
            height={modalSize.height}
            minConstraints={[200, 150]}
            maxConstraints={[800, 600]}
            onResize={handleResize}
            resizeHandles={["se", "sw", "ne", "nw", "n", "s", "e", "w"]}
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
                  cursor: "move",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <h4 style={{ margin: 0 }}>Draggable Resizable Modal</h4>
                <button
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={onClose}
                >
                  ✖
                </button>
              </div>
              <div style={{ padding: "20px", flex: 1 }}>
                <p>This is a draggable and resizable modal.</p>
                <p>
                  You can drag it from the header and resize it from edges or
                  corners.
                </p>
              </div>
            </div>
          </ResizableBox>
        </div>
      </Draggable>

      {/* {!isOpen && <button onClick={() => setIsOpen(true)}>Open Modal</button>} */}
    </>
  );
};

export default DraggableResizableModal;

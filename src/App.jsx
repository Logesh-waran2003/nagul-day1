import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DraggableResizableModal from "./components/DraggableResizableModal";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Open Modal</button>}
      {/* {isOpen && <DraggableResizableModal />} */}
      {isOpen && <Modal />}
    </>
  );
}

export default App;

import { useState } from "react";
import { Modal } from "../components/modal/Modal";

export const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  // const containerRef = useRef(null);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000); // Відкрити модальне вікно через 3 секунди

  //   return () => {
  //     clearTimeout(timer); // Очищення таймера при зміні компоненту або закритті вікна
  //   };
  // }, []);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const closeOnOverlayClick = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginTop: "100vh" }}>
      {/* <h2>{text}</h2> */}
      <div
        style={{
          width: "800px",
          height: "800px",
          backgroundColor: "orange",
        }}
      ></div>
      {showModal && (
        <Modal onClose={closeOnOverlayClick}>
          <a href="../images/vadym.boreichuk@gmail.com.pdf" download>
            {/* https://drive.google.com/file/d/1qE273A-qHaNqEsEpFUKxya5dpss-xFJc/view?usp=drive_link */}
            Dowload CV FOR FREE!!!
          </a>
        </Modal>
      )}
      {/* <button onClick={toggleModal}>Open Modal</button>
      {showModal && (
        <Modal onClose={closeOnOverlayClick}>
          <h2>My Modal Content</h2>
          <p>This is the content of the modal window.</p>
          <button onClick={toggleModal}>Close</button>
        </Modal>
      )} */}
    </div>
  );
};

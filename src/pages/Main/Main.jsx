import { useEffect } from "react";
import "./Main.css";

export const Main = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  useEffect(() => {
    const textElement = document.querySelector(".text");
    const texts = ["My name is Vadym Boreichuk", "I`m frontend developer"];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 200);
      } else {
        setTimeout(typeText, isDeleting ? 50 : 100);
      }
    }

    typeText();
  }, []);

  // typeText(); // Запустити анімацію набору та видалення тексту
  // });

  return (
    <div className="container">
      <div className="typing-effect">
        <span className="text text-with-shadow"></span>
      </div>
    </div>
  );
};

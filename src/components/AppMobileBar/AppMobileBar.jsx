import React, { useEffect, useRef, useState } from "react";
import { Container, NavContainer } from "./AppMobileBar.styled";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { MobileContainer } from "../AppBar/AppBar.styled";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

export const AppMobileBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container>
      {isMenuVisible ? (
        <MdClose onClick={handleToggleMenu} />
      ) : (
        <MdMenu onClick={handleToggleMenu} />
      )}
      <NavContainer>
        {isMenuVisible && (
          <MobileNavigation handleToggleMenu={handleToggleMenu} />
        )}
      </NavContainer>
    </Container>
  );
};

// export default MenuButton;

// export const AppMobileBar = () => {
//   const click = () => {
//     console.log("click");
//   };
//   return (
//     <Container>
//       <MdMenu onClick={() => click()} />
//       <MdClose onClick={() => click()} />
//     </Container>
//   );
// };

{
  /* <button onClick={handleToggleMenu}>Toggle Menu</button> */
}
// {
//   isMenuVisible && (
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//       {/* Додайте більше пунктів меню за потреби */}
//     </ul>
//   );
// }

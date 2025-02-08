import React from "react";

const Tabs = ({ buttons, ButtonsContainer = "menu", children }) => {
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;

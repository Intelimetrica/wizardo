import React from "react";

const MenuIcon = props => {
  const { isMenuHide, onClick } = props;

  return (
    <section id="menu-icon" onClick={onClick}>
      <div className={`line ${!isMenuHide && "js-rotate-1"}`} />
      <div className={`line ${!isMenuHide && "js-opacity"}`} />
      <div className={`line ${!isMenuHide && "js-rotate-2"}`} />
    </section>
  );
};

export default MenuIcon;

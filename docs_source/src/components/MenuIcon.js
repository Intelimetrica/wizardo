import React, { Component } from "react";

class MenuIcon extends Component {
  render() {
    const { isMenuHide, onClick } = this.props;

    return (
      <section id="menu-icon" onClick={onClick}>
        <div className={`line ${!isMenuHide && "js-rotate-1"}`} />
        <div className={`line ${!isMenuHide && "js-opacity"}`} />
        <div className={`line ${!isMenuHide && "js-rotate-2"}`} />
      </section>
    );
  }
}

export default MenuIcon;

import React, { Component } from "react";
import classNames from "classnames";

class MenuIcon extends Component {
  render() {
    const { isMenuHide, onClick } = this.props;

    return (
      <section id="menu-icon" onClick={onClick}>
        <div
          className={classNames("line", {
            "js-rotate-1": !isMenuHide
          })}
        />
        <div
          className={classNames("line", {
            "js-opacity": !isMenuHide
          })}
        />
        <div
          className={classNames("line", {
            "js-rotate-2": !isMenuHide
          })}
        />
      </section>
    );
  }
}

export default MenuIcon;

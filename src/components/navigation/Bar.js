import React, { Component } from "react";

export class Bar extends Component {
  createItem = (item, dropDown = false, list) => {
    if (dropDown)
      return (
        <li className="nav__list__item" onMouseOver={this.handleHover}>
          {item}
          <svg className="nav__list__item-arrowDown">
            <use xlinkHref="img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </li>
      );
    else
      return (
        <li className="nav__list__item">
          <p>{item}</p>
        </li>
      );
  };

  handleHover = () => {
    console.log("hello");
  };

  render() {
    // object to create the nav dynamically. Boolean decides if it is a dropdown item.
    const navItems = [
      { item: ["Shop", true, { dropdown: [1, 2, 3, 4, 5] }] },
      { item: ["Nav Item", true] },
      { item: ["Nav Item", true] },
      { item: ["About", false] },
      { item: ["Blog", false] },
      { item: ["Contact", false] }
    ];

    return (
      <nav className="nav">
        <ul className="nav__list">
          {navItems.map(navItem => this.createItem(navItem.item[0], navItem.item[1]))}
        </ul>
      </nav>
    );
  }
}

export default Bar;

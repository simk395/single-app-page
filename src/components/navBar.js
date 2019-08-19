import React, { Component } from "react";

export class Navbar extends Component {
  createItem = (item, dropDown = false, list) => {
    if (dropDown)
      return (
        <li className="nav-list-item" onMouseOver={this.handleHover}>
          {item}
          <svg className="nav-list-item-arrowDown">
            <use xlinkHref="img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </li>
      );
    else
      return (
        <li className="nav-list-item">
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
        <ul className="nav-list">
          {navItems.map(navItem => this.createItem(navItem.item[0], navItem.item[1]))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

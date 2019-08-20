import React, { Component } from "react";

export class footerNav extends Component {
  render() {
    const { item } = this.props.item;
    return (
      <div className="footer-list">
        <h2 className="footer-list-title">{item.title}</h2>
        <ul className="footer-list-unordered">
          {item.list.map(listItem => (
            <li className="footer-list-item">
              <a className="footer-list-item-anchor" href="#">
                {listItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default footerNav;

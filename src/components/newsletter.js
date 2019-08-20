import React, { Component } from "react";

export class newsletter extends Component {
  createSvg = img => {
    return (
      <svg className="footer-list-item-icon">
        <use xlinkHref={`img/sprite.svg#${img}`}></use>
      </svg>
    );
  };

  render() {
    const { item } = this.props.item;
    let svg = ["icon-facebook", "icon-twitter", "icon-instagram", "icon-pinterest"];
    return (
      <div className="footer-list">
        <h2 className="footer-list-title">{item.title}</h2>
        <ul className="footer-list-unordered">
          <li className="footer-list-item">
            <p className="footer-list-item-para">
              vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien
              faucibus
            </p>
          </li>
          <li className="footer-list-item">
            <form className="footer-list-item-signUp">
              <input
                className="footer-list-item-signUp-input"
                type="email"
                placeholder="Your e-mail here"
              />
              <button className="footer-list-item-signUp-submit" type="submit">
                Sign Up
              </button>
            </form>
          </li>
          <li className="footer-list-item">
            <div className="footer-list-item-icons">{svg.map(img => this.createSvg(img))}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default newsletter;

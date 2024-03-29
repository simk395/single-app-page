import React, { Component } from "react";

export class Footer extends Component {
  state = {
    bool: true
  };

  componentDidMount() {
    const allList = document.querySelectorAll(".footer__nav-list");
    window.addEventListener("resize", e => {
      if (window.innerWidth > 1200) {
        for (const element of allList) element.style.display = "flex";
      } else {
        for (const element of allList) element.style.display = "none";
        this.setState({ bool: true });
      }
    });
  }

  // toggles list of items in footer for mobile view
  handleNavItems = e => {
    let list = e.target.parentElement.nextSibling;
    if (list.style.display === "flex") list.style.display = "none";
    else list.style.display = "flex";
    this.setState({ bool: !this.state.bool });
  };

  render() {
    const { item } = this.props.item;
    const { bool } = this.state;

    const plus = (
      <svg className="footer__nav-container__head-icon">
        <use xlinkHref="img/sprite.svg#icon-plus" />
      </svg>
    );

    const minus = (
      <svg className="footer__nav-container__head-icon">
        <use xlinkHref="img/sprite.svg#icon-minus" />
      </svg>
    );

    return (
      <div className="footer__nav-container">
        <div className="footer__nav-container__head">
          <h2 className="footer__nav-container__head-title">{item.title}</h2>
          {bool ? plus : minus}
          <div className="footer__nav-container__head-event" onClick={this.handleNavItems}></div>
        </div>
        <ul className="footer__nav-list">
          {item.list.map(listItem => (
            <li className="footer__nav-list__item" key={`${listItem}`}>
              <a className="footer__nav-list__item-anchor" href="#">
                {listItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Footer;

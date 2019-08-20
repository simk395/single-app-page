import React from "react";

const newsletter = props => {
  const { item } = props.item;
  let svg = ["icon-facebook", "icon-twitter", "icon-instagram", "icon-pinterest"];
  return (
    <div className="footer__nav-container">
      <h2 className="footer__nav-container__title">{item.title}</h2>
      <ul className="footer__nav-list">
        <li className="footer__nav-list__item">
          <p>
            vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien
            faucibus
          </p>
        </li>
        <li className="footer__nav-list__item">
          <form className="footer__nav-list__item-signup">
            <input
              className="footer__nav-list__item-signup-input"
              type="email"
              placeholder="Your e-mail here"
            />
            <button className="footer__nav-list__item-signup-submit" type="submit">
              Sign Up
            </button>
          </form>
        </li>
        <li className="footer__nav-list__item">
          <div className="footer__nav-list__item-container">
            {svg.map(img => props.createImg(img))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default newsletter;

import React from "react";

const newsletterMobile = props => {
  let svg = ["icon-facebook", "icon-twitter", "icon-instagram", "icon-pinterest"];
  return (
    <div className="footer__nav-container__mobile">
      <h4 className="footer__nav-container__title">Join Our Newsletter</h4>
      <p className="footer__nav-container__subtitle">
        vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien
        faucibus
      </p>
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
      <div className="footer__nav-list__item-container">{svg.map(img => props.createImg(img))}</div>
    </div>
  );
};

export default newsletterMobile;

import React from "react";

const footerNavigation = props => {
  const { item } = props.item;
  return (
    <div className="footer__nav-container">
      <h2 className="footer__nav-container__title">{item.title}</h2>
      <ul className="footer__nav-list">
        {item.list.map(listItem => (
          <li className="footer__nav-list__item">
            <a className="footer__nav-list__item-anchor" href="#">
              {listItem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default footerNavigation;

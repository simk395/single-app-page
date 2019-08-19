import React, { Component } from "react";

export class searchBar extends Component {
  render() {
    return (
      <form className="search">
        <button className="search-btn">
          <svg className="search-icon">
            <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
        <input className="search-input" type="text" placeholder="Search..." />
      </form>
    );
  }
}

export default searchBar;

import React from "react";

const searchBarMini = () => {
  return (
    <form className="search mini">
      <button className="search-btn" type="submit" value="Submit">
        <svg className="search-icon">
          <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
      <input className="search-input" type="text" />
    </form>
  );
};

export default searchBarMini;

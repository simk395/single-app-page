import React from "react";

const results = props => {
  return <h2 className="results">{`Showing Results for "${props.value}"`}</h2>;
};

export default results;

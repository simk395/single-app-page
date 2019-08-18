import React from "react";

// there is a choice to add the color to class, but then all colors would need to be added
// manually, where as this implication will just search for what css has to offer
// even though its bad to do inline styling, this is automated and dynamic

const productColors = props => {
  return (
    <div className="product-colors">
      {props.colors.map(color => {
        if (color === props.colors[0])
          return (
            <div
              onClick={e => props.handleColor(e, color)}
              className="product-colors-single product-colors-active"
              style={{ background: `${color.title}` }}
            ></div>
          );
        else
          return (
            <div
              onClick={e => props.handleColor(e, color)}
              className="product-colors-single"
              style={{ background: `${color.title}` }}
            ></div>
          );
      })}
    </div>
  );
};
export default productColors;

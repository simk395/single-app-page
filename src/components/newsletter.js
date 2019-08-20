import React, { Component } from "react";

export class newsletter extends Component {
  render() {
    const { item } = this.props.item;
    return (
      <div className="footer-list">
        <h2 className="footer-list-title">{item.title}</h2>
      </div>
    );
  }
}

export default newsletter;

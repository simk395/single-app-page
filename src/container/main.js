import React, { Component } from "react";
import Searchbar from "../components/searchBar";
import Results from "../components/results";
import Product from "../components/productCard";

export class main extends Component {
  state = {
    merch: [],
    merchFilter: []
  };
  componentDidMount() {
    fetch("https://young-refuge-33420.herokuapp.com/")
      .then(resp => resp.json())
      .then(merch => this.setState({ merch, merchFilter: merch }));
  }
  render() {
    const { products } = this.state.merch;
    return (
      <main>
        <Searchbar />
        <Results />
        {products ? products.map(merch => <Product product={merch} />) : null}
      </main>
    );
  }
}

export default main;

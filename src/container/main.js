import React, { Component } from "react";
import Searchbar from "../components/searchBar";
import Results from "../components/results";
import Product from "../components/product/Card";

export class Main extends Component {
  state = {
    merch: [],
    merchFilter: [],
    value: ""
  };
  componentDidMount() {
    fetch("https://young-refuge-33420.herokuapp.com/")
      .then(resp => resp.json())
      .then(merch => this.setState({ merch: merch.products, merchFilter: merch.products }));
  }

  //filters object to be updated based on searchbar input
  handleSearch = e => {
    e.preventDefault();
    const { merch } = this.state;
    const input = e.target.lastElementChild.value;
    let filter = merch.filter(product => product.title.toLowerCase().includes(input.toLowerCase()));
    this.setState({ merchFilter: filter, value: input });
  };

  render() {
    const { merchFilter: products } = this.state;
    const { value } = this.state;
    return (
      <main className="main">
        <Searchbar handleSearch={this.handleSearch} />
        {value ? <Results value={value} /> : null}
        <section className="product">
          {products
            ? products.map(merch => <Product key={`${merch.title}`} product={merch} />)
            : null}
        </section>
      </main>
    );
  }
}

export default Main;

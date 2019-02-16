// Navigation.js

import React from "react";
import "../../../assets/style/Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";

class Navigation extends React.Component<any, any> {
  state: any = {
    genre: "comedy",
    year: {
      label: "year",
      min: 1990,
      max: 2017,
      step: 1,
      value: { min: 2000, max: 2017 }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  };

  onChange = (data: any) => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };

  render() {
    return (
      <section className="navigation">
        <Selection />

        <Slider data={this.state.year} onChange={this.onChange} />
        <Slider data={this.state.rating} onChange={this.onChange} />
        <Slider data={this.state.runtime} onChange={this.onChange} />
      </section>
    );
  }
}

export default Navigation;

// Main.js

import React from "react";
import "../assets/style/Main.css";
import Navigation from "./components/Navigation";
import Movies from "./containers/Movie/Movies";

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Navigation />
        <Movies />
      </section>
    );
  }
}

export default Main;

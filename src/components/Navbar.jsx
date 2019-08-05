import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="uk-container uk-margin" uk-navbar="">
        <div className="uk-navbar-left">
          <p className="uk-navbar-item uk-logo">Logo</p>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orcamentos">Orcamentos</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

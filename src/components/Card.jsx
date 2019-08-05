import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { dados } = this.props;
    return (
      <div>
        <Link to={`/orcamentos/${dados.id}`}>
          <div className="uk-card uk-card-default uk-card-body uk-margin">
            <h3 className="uk-card-title">{dados.title}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;

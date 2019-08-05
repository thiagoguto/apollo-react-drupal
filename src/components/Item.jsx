import React, { Component } from "react";

class Item extends Component {
  render() {
    console.log("item orc", this.props.dados.orcamento);
    const { orcamento } = this.props.dados;
    return (
      <li>
        swralh {orcamento.title} - {orcamento.uuid} {orcamento.nid}
      </li>
    );
  }
}

export default Item;

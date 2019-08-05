import React, { Component } from "react";
import Item from "./Item";

class ItensLista extends Component {
  render() {
    const { dados } = this.props;
    return (
      <ul className="uk-list uk-list-divider">
        {dados.orcamento.map(item => (
          <Item key={item.produto.quantidade} dados={item} />
        ))}
      </ul>
    );
  }
}

export default ItensLista;

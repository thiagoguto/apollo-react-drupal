import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import Loading from "./Loading";
import Card from "./Card";

class Orcamentos extends Component {
  render() {
    console.log(this.props.listaOrcamentos);
    const { loading, orcamentos } = this.props.listaOrcamentos;
    return (
      <Fragment>
        {loading === true ? (
          <Loading />
        ) : (
          <div className="uk-grid uk-child-width-1-3" uk-grid="masonry: true">
            {orcamentos.dados.map(item => (
              <Card key={item.id} dados={item} />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

const queryOrcamento = gql`
  query {
    orcamentos: nodeQuery(
      limit: 3
      filter: { conditions: [{ field: "type", value: "orcamento" }] }
    ) {
      dados: entities {
        ... on NodeOrcamento {
          id: uuid
          title
          orcamento: fieldItens {
            produto: entity {
              ... on ParagraphMedidas {
                tipo: fieldTipo
                quantidade: fieldQuantidade
              }
            }
          }
        }
      }
    }
  }
`;

export default graphql(queryOrcamento, { name: "listaOrcamentos" })(Orcamentos);

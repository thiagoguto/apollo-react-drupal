import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Loading from "../components/Loading";
import Item from "../components/Item";

class Orcamento extends Component {
  render() {
    return (
      <>
        <h1>Orcamento detalhe page</h1>
        <Query
          query={queryOrcamentoDetalhe}
          variables={{ id: this.props.match.params.id }}
        >
          {({ loading, error, data }) => {
            if (error) return console.log("error", error);
            if (loading || !data) return <Loading />;
            console.log("dados", data);
            return <Item dados={data} />;
          }}
        </Query>
      </>
    );
  }
}

const queryOrcamentoDetalhe = gql`
  query queryOrcamentoDetalhe($id: String!) {
    orcamento: nodeById(id: $id) {
      ... on NodeOrcamento {
        title
        nid
        uuid
        type {
          targetId
        }
        fieldItens {
          entity {
            ... on ParagraphMedidas {
              fieldTipo
              fieldQuantidade
              fieldPrazo
              fieldLargura
              fieldFechamento
              fieldDescricao
              fieldCusto
              fieldComprimento
              fieldAltura
            }
          }
        }
        status
      }
    }
  }
`;

export default Orcamento;

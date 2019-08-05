import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Loading from "../components/Loading";
import Card from "../components/Card";

class Orcamento extends Component {
  render() {
    return (
      <>
        <h1>Orcamento page</h1>
        <Query query={queryOrcamento}>
          {({ loading, error, data }) => {
            if (error) return console.log("error", error);
            if (loading || !data) return <Loading />;
            console.log("dados", data.orcamentos.dados);
            return data.orcamentos.dados.map(item => (
              <Card key={item.id} dados={item} />
            ));
          }}
        </Query>
      </>
    );
  }
}

const queryOrcamento = gql`
  query {
    orcamentos: nodeQuery(
      sort: { field: "created", direction: DESC }
      filter: { conditions: [{ field: "type", value: "orcamento" }] }
    ) {
      dados: entities {
        ... on NodeOrcamento {
          id: nid
          title
          ac: fieldAc
          created
          codigo: fieldCodigo
        }
      }
    }
  }
`;

export default Orcamento;

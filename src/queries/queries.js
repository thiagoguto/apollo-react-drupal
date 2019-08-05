import { gql } from "apollo-boost";

export const QueryOrcamento = {
  query: gql`
    query {
      orcamentos: nodeQuery(
        filter: { conditions: [{ field: "type", value: "orcamento" }] }
      ) {
        dados: entities {
          ... on NodeOrcamento {
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
  `
};

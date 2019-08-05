import React, { Component } from "react";
import apolloClient from "./services/apollo";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Orcamentos from "./pages/Orcamentos";
import OrcamentoDetalhe from "./pages/OrcamentoDetalhe";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <Navbar />
          <hr />
          <section className="uk-section">
            <div className="uk-container">
              <Route path="/" exact component={Home} />
              <Route path="/orcamentos" exact component={Orcamentos} />
              <Route path="/orcamentos/:id" component={OrcamentoDetalhe} />
            </div>
          </section>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

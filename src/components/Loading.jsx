import React, { Component } from "react";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-padding uk-width-1-3">
            <div uk-spinner="ratio: 1.5" /> Carregando
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;

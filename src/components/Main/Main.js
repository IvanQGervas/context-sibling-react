import React, { Component } from "react";
import Formulario from "../Formulario";
import Card from '../Card'

class Main extends Component {

  state = {
    user: {}
  }

  handleStateUser = (user) => {
    this.setState({user})
  }

  render() {

    return (
      <main className="main">
        <Formulario handleStateUser={this.handleStateUser} />
        <Card dataUser={this.state.user} />
      </main>
    );
  }
}

export default Main;

import React, { Component } from "react";

import { userContext } from "../../context/userContext";

class Head extends Component {
  render() {
    console.log('Hola');
    return (
      <userContext.Consumer>
        {({ user }) =>
          user.nombre === undefined
            ? ''
            : <div className="head">
              <span>{user.email}</span>
              <div className="head--containerimg">
              <img className="head--containerimg-img" src={user.img} alt={user.nombre} />
              </div>
            </div>

        }
      </userContext.Consumer>
    )
  }
}

export default Head;

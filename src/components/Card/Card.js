import React, { Component } from "react";

class Card extends Component {

  contentCard = (user) => {
    return (
      <div>
        <h2>{user.nombre}</h2>
        <h3>Edad: {user.edad} años</h3>
        <p>{user.email}</p>
        <img src={user.img} alt={user.name} />
      </div>
    )
  }

  render() {
    console.log('User', this.props.dataUser)
    return (
      <div>
        {this.props.dataUser.nombre === undefined
          ? ''
          : this.contentCard(this.props.dataUser)
        }
      </div>
    )
  }
}

export default Card;

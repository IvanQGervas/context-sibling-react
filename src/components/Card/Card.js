import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.cardRef = React.createRef()
  }
  

  contentCard = (user) => {
    this.cardRef.current.classList.remove('hidden')
    return (
      <>
        <img className="card--img" src={user.img} alt={user.name} />
        <h2 className="card--nombre">{user.nombre}</h2>
        <h3 className="card--edad">Edad: {user.edad} años</h3>
        <p className="card--email">{user.email}</p>
      </>
    )
  }

  render() {
    console.log('User', this.props.dataUser)
    return (
      <div className="card hidden" ref={this.cardRef}>
        {this.props.dataUser.nombre === undefined
          ? ''
          : this.contentCard(this.props.dataUser)
        }
      </div>
    )
  }
}

export default Card;

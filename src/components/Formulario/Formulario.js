import React, { Component } from "react";

import { userContext } from '../../context/userContext';


class Formulario extends Component {

  constructor(props) {
    super(props)
    this.nombre = React.createRef()
    this.email = React.createRef()
    this.img = React.createRef()
    this.edad = React.createRef()
  }


  submitForm = (event) => {
    event.preventDefault()
  }

  componentDidUpdate() {
    this.nombre.current.value = '';
    this.email.current.value = '';
    this.img.current.value = '';
    this.edad.current.value = '';
  }


  render() {

    return (
      <form onSubmit={this.submitForm} >
        <label >Nombre: </label>
        <input type="text" name="nombre" ref={this.nombre} />

        <label >Email: </label>
        <input type="text" name="email" ref={this.email} />

        <label >URL imagen: </label>
        <input type="text" name="img" ref={this.img} />

        <label >Edad: </label>
        <input type="number" name="edad" ref={this.edad} />

        <userContext.Consumer>
          {({ user, setUser }) => {
            return <input type="submit" onClick={() => {
              setUser({ nombre: this.nombre.current.value, email: this.email.current.value, img: this.img.current.value, edad: this.edad.current.value })
              this.props.handleStateUser({ nombre: this.nombre.current.value, email: this.email.current.value, img: this.img.current.value, edad: this.edad.current.value })
            }} />
          }}
        </userContext.Consumer>
      </form>
    );
  }
}

export default Formulario;

import './App.css';

import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { userContext } from './context/userContext';

export class App extends Component {

  state = {
    user: {}
  }


  setUser = (user) => {
    console.log(user);
    this.setState({user})
  }

  render() {
    const value = {
      user: this.state.user,
      setUser: this.setUser,
    }
    return (
      <>
        <userContext.Provider value={value}>
          <Header />
          <Main />
        </userContext.Provider>
        <Footer />
      </>
    )
  }
}

export default App
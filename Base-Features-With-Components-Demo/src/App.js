import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernameList: [
      'kousthubha','annihilator'
    ]
  };

  onChangeInputTB = (event) => {
    this.setState ({
      usernameList: [
        'kousthubha', event.target.value
      ]
  })
  };
  render() {
    return (
      <div>
      <UserInput changeFn = {this.onChangeInputTB} value = {this.state.usernameList[1]}  />
      <UserOutput username={this.state.usernameList[0]}/>
      <UserOutput username={this.state.usernameList[1]}/>
      </div> 
    );
  }
}

export default App;

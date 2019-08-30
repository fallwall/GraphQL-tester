import React, { Component } from 'react';
import { threeDices } from './services/api';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dices: []
    }
  }

  componentDidMount=()=> {
    // const dices = threeDices();
    console.log(threeDices());
    // this.setState({
    //   dices: dices
    // })
  }
  
  render() {
    return (
      <div>
        {this.state.dices && this.state.dices.map((dice, i) => <div key={i}>dice</div>)}
      </div>
    )
  }
}


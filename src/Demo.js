import React, { Component } from 'react'
import axios from 'axios';
import './App.css'

export default class Demo extends Component {
  state={advice: '' ,}
  componentDidMount()
  {

  }
  fetchAdvice=()={
    axios.get('https://api.adviceslip.com/advice')
    .then((respose)=>
    { 
        const {advice}=respose.data.slip;
        this.setState({advice})
    })
    .catch((error)=>
    {
       console.log(error);
    })
  }
  render() {
    return (
      <div>
        <div>
        <h1>
        

         </div>
      </div>
    )
  }
}

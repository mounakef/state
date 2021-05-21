
import React, { Component } from 'react'
import "./App.css"

 class App extends Component { 
  constructor (props) {
    super (props) 
  this.state ={
    person: {
        FullName :"My name is Mouna",
        Bio :'I am a developer'  ,
        Profession : 'my profession is a web developer' ,
        Imgsrc: 'profile.jpg ' ,
        show:false ,
        
  },
  count:0 ,
  }}
  handleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  } 
  componentDidMount(){
    this.interval=setInterval(() => {
          this.setState({ count :this.state.count+1})
    }, 1000);
    
    
  }
 


  render() {
    return (
      <div className = "App">
      {this.state.show && 
        <>
        <h1>  {this.state.person.FullName }</h1>
        <h1>  {this.state.person.Bio }</h1>
        <h1>  {this.state.person.Profession} </h1>
        <img style={{maxWidth:"200px"}} src={this.state.person.Imgsrc} alt=''/>
        <h1> {this.state.count}</h1>
        </>

      }
       
     
        <button onClick={this.handleShow}>Show</button>
      </div>
    )
  }
}

export default App

import React, { Component } from "react";
import './App.scss';
import Header from './Components/Header';
import ShowPosts from './Components/Showposts';

class App extends Component{

  render(){
    return (
           <div className="container">
              <Header></Header>
              <ShowPosts></ShowPosts>
            </div>
      
    );
  }
  
}

export default App;
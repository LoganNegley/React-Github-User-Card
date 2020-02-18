import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super(); 
    this.state = { 
       myData:'',
    }
    console.log(this.state)
  }

    render(){
      return (
        <div className="App">
        </div>
      );
};

}

export default App;
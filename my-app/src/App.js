import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super(); 
    this.state = { 
       myData:[],
    }
    console.log(this.state)
  }

  componentDidMount(){
  axios.get('https://api.github.com/logannegley/')
  .then (res => {
  console.log(res)
   })
  .catch(err => console.log(err)
  );
}

    render(){
      return (
        <div className="App">
        </div>
      );
};

}

export default App;
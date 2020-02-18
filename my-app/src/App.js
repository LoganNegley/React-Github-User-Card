import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from '../src/UserCard';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = { 
       myData:[],
       followers:[]
    }
  }

  componentDidMount(){
  axios.get('https://api.github.com/users/LoganNegley')
  .then (res => {
  // res.data
  this.setState({
    myData:res.data,
    followers:res.data.followers_url
  });
   console.log(this.state.myData)
  })
  .catch(err => console.log(err)
  );
}

    render(){
      return (
        <div className="App">
        <UserCard gitData={this.state.myData}/>
        </div>
      );
};

}

export default App;
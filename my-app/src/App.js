import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from '../src/components/UserCard';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = { 
       myData:[],
       followers:[]
    }
  }

  componentDidMount(){
    // fetching user info
  axios.get('https://api.github.com/users/LoganNegley')
  .then (res => {
  // res.data
  this.setState({
    myData:res.data,
  });
   console.log(this.state.myData)
  })
  .catch(err => console.log(err, 'user not found')
  );

// fetching followers 
    axios.get('https://api.github.com/users/LoganNegley/followers')
  .then (res => {
  console.log(res.data)
  // this.setState({
  //   followers:,
  // });
  })
  .catch(err => console.log(err, "followers not found")
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


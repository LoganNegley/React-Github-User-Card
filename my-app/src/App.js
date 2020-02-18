import React from 'react';
import axios from 'axios';
import UserCard from '../src/components/UserCard';
import styled from 'styled-components'

// Styles
const AppContainer = styled.div`
background-color:#04ffee;
`;

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
 
  this.setState({
    followers:res.data,
  });
     console.log(this.state.followers)
  })
  .catch(err => console.log(err, "followers not found")
  );
}

    render(){
      return (
        <AppContainer className="App">
        <UserCard gitData={this.state.myData} followers={this.state.followers}/>
        </AppContainer>
      );
};

}

export default App;


import React from 'react';
import '../App';
import FollowersCard from '../components/FollowersCard';


class UserCard extends React.Component {

    render(){
      return (
        <div className="Usercard-container">
          <div className='userCard'>
            <h1>{this.props.gitData.login}</h1>
            <img src={this.props.avatar_url}/>
            <p>{this.props.gitData.bio}</p>
            <p>Number of followers: {this.props.gitData.followers}</p>
            <p>Following: {this.props.gitData.following}</p>
          </div>
          <div className='followers-container'>
            <FollowersCard/>
          </div>
        </div>
      );
};

}

export default UserCard;
import React from 'react';
import FollowersCard from '../components/FollowersCard';
import styled from 'styled-components'



// Styles
const UserCardContainer = styled.div`
width:35%;
margin:25px auto;
`;

class UserCard extends React.Component {

    render(){
      return (
        <UserCardContainer className="Usercard-container">
          <div className='userCard'>
            <h1>{this.props.gitData.login}</h1>
            <img width='100px'src={this.props.gitData.avatar_url} alt={this.props.gitData.login}/>
            <p>{this.props.gitData.bio}</p>
            <p>Number of followers: {this.props.gitData.followers}</p>
            <p>Following: {this.props.gitData.following}</p>
            <p>Follow {this.props.gitData.login}<a href={this.props.gitData.html_url}> Here</a></p>
          </div>
            <FollowersCard followers={this.props.followers}/>
        </UserCardContainer>
      );
};

}

export default UserCard;
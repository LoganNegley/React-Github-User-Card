import React from 'react';
import FollowersCard from '../components/FollowersCard';
import styled from 'styled-components'



// Styles
const UserCardContainer = styled.div`
width:35%;
margin:0 auto;

`;

const Card = styled.div`
border:black solid 2px;
border-radius:5px;
margin:5px;
text-align:center;
background-color:#3eff09;

`;
const Heading = styled.div`
text-decoration:underline;
font-size:35px;
font-weight:bold;
`;

class UserCard extends React.Component {

    render(){
      return (
        <UserCardContainer className="Usercard-container">
          <Card className='userCard'>
            <Heading>{this.props.gitData.login}</Heading>
            <img width='100px'src={this.props.gitData.avatar_url} alt={this.props.gitData.login}/>
            <p>{this.props.gitData.bio}</p>
            <p>Number of followers: {this.props.gitData.followers}</p>
            <p>Following: {this.props.gitData.following}</p>
            <p>Follow {this.props.gitData.login}<a href={this.props.gitData.html_url}> Here</a></p>
          </Card>
            <FollowersCard followers={this.props.followers}/>
        </UserCardContainer>
      );
};

}

export default UserCard;
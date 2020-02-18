import React from 'react';
import styled from 'styled-components'


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


class FollowerCard extends React.Component {


    render(){
      return (
        <div className='followers-container'>
            {this.props.followers.map(item =>(
            <Card className='followerCard'>
                <Heading>{item.login}</Heading>
                <img width='100px'src={item.avatar_url} alt={item.login}/>
                <p>Follow {item.login}<a href={item.html_url}> Here</a></p>
            </Card>
            ))}
        </div>
      )
}
}

export default FollowerCard;

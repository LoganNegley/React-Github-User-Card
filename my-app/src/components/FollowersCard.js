import React from 'react';
import '../App';


class FollowerCard extends React.Component {


    render(){
      return (
        <div className='followers-container'>
            {this.props.followers.map(item =>(
            <div className='followerCard'>
                <h1>{item.login}</h1>
                <img width='100px'src={item.avatar_url} alt={item.login}/>

                <p>Follow {item.login}<a href={item.html_url}>Here</a></p>
                
            </div>
            ))}
        </div>
      )
}
}

export default FollowerCard;

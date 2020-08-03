import React, { useState, useEffect } from 'react';
import APIManager from "../DataCalls/APIManager";
import "./FriendList.css";
import FriendForm from './FriendForm';
import FriendCard from './FriendCard';

const FriendList = props => {
    const [friends, setFriends] = useState([]);
    
    const getFriends = () => {
        APIManager.GetUsersFriends()
        .then((response) => {
            setFriends(response)
        })
    }

    useEffect(() => {
        getFriends()
    }, [])


    return (

        <div className="friendContainer">
            <p className="welcomeFriends">Find fellow cooks below!</p>
            <FriendForm  getFriends={getFriends} />

        <div className="friendCardContainer">
            {friends.map(friend => <FriendCard
             key={friend.id}
             friend={friend}
             {...props} />)}
        </div>

        </div>
    )
}


export default FriendList
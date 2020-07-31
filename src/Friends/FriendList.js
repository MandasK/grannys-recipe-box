import React, { useState, useEffect } from 'react';
import APIManager from "../DataCalls/APIManager";
import "./FriendList.css";
import AddFriendCard from './AddFriendCard';
import FriendCard from './FriendCard';

const FriendList = props => {
    const [friends, setFriends] = useState([]);
    
    const friendUpdate = () => {
        APIManager.GetUsersFriends()
        .then((response) => {
            setFriends(response)
            props.addFriends(response)
        })
    }

    useEffect(() => {
        friendUpdate()
    }, [])


    return (
        <div className="friendContainer">
            <p>Looking for more Recipes?</p>
            <p>Find some fellow cooks here.</p>
            <AddFriendCard friendUpdate={friendUpdate} newFriends={props.newFriends} />

        <div className="friendCardContainer">
            {friends.map(friend => <FriendCard
             key={friend.id}
             friend={friend}
             setFriends={friendUpdate}
             {...props} />)}
        </div>

        </div>
    )
}


export default FriendList
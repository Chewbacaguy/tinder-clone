import React from 'react'
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return <div className= "chats">
        <Chat 
            name = "Bella"
            message = "Give me food!"
            timestamp = "2 sec ago"
            profilePic = "..."
        /> 
        <Chat 
            name = "Canuto"
            message = "Would you mind if I shared croquetas with you?"
            timestamp = "2 hours ago"
            profilePic = "..."
        /> 
        <Chat 
            name = "Wero"
            message = "I got such a huge dick!"
            timestamp = "23 min ago"
            profilePic = "..."
        /> 
        <Chat 
            name = "Becky"
            message = "No quiero a wero!"
            timestamp = "2 sec ago"
            profilePic = "..."
        /> 

           
    </div>;
    
}

export default Chats;

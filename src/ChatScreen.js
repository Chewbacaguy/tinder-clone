import { Avatar } from '@material-ui/core';
import React,{ useState} from 'react';
import "./ChatScreen.css";
function ChatScreen() {
    const[input, setInput] = useState('');

    const[messages, setMessages] = useState([
        {
            name: 'Bella', 
            image: 'https://i.pinimg.com/originals/71/84/fa/7184fa75b2346a82ef286c268c18bf9f.jpg',
            message: 'sup',
        },
        {
            name: 'Canuto', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5LN2ColM9zyrgPlmpNB0FmeRH9HCvzkBSmKnyzF3ZhFsVbVCAS1YhZ0DiYic6pE2sa_mcXJfxno8b6T2AIzPy0q82wEuh6A7w30V0&usqp=CAU&ec=45707745',
            message: "yo was good",
        },
        {
            name: 'Wero', 
            image: 'https://www.hola.com/imagenes//estar-bien/20200525168642/razas-perro-border-collie/0-827-353/border-collie-t.jpg',
            message: 'hoe'
        },
        {
            message: "Sup Canuto,"
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className= "chatScreen">
            <h2> Chat screen </h2>
            <p className= "chatScreen__timestamp"> You Matched with Canuto on 10/01/2020</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt = {message.name}
                        src = {message.image}
                    />
                    <p className="chatScreen__text"> {message.message} </p>
                </div>
                ): (
                    <div className = "chatScreen__message">
                        <p className="chatScreen__textUser">{message.message} </p>
                    </div>
                )
               
            ))}

            <form className="chatScreen__input">
             <input
             value= {input}
             onChange={e => setInput(e.target.value)}
              className="chatScreen__inputField"
              placeholder="Type a message"
              type="text" 
              />
              <button onClick = {handleSend} type="submit" className="input__button"> SEND </button>
            </form>
        </div>
    );
}

  


export default ChatScreen;

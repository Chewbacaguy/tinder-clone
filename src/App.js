import React from 'react';
import SwipeButtons from './SwipeBottons';
import Header  from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from "./ChatScreen";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch> 
          <Route path = "/chat/:person" >
            <Header backButton = "/chat" /> 
            <ChatScreen />
            <Chats />
          </Route>
          <Route path = "/chat">
            <Header backButton="/"/>  
            <Chats />
            <TinderCards /> 
            <SwipeButtons />
          </Route>
        </Switch>
        
      </Router>
      
    </div>
  );
}



export default App;

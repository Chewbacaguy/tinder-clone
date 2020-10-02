import React from 'react';
import "./Header.css";
import PetsIcon from '@material-ui/icons/Pets';
import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
import IconButton from "@material-ui/core/IconButton";
import {Link, useHistory} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton}) { 
    const history = useHistory();
    return (
        //BEM
        <div className= "header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize = "large" className= "header__icons"/>
            </IconButton>
            ) : (
                <IconButton> 
                     <PetsIcon className="header_icon " fontSize= "large" />
                </IconButton>
            )}
            
           
           
            <Link to = "/" > 
                <img
                    className =  "header_logo"
                    src= "https://cdn.dribbble.com/users/713867/screenshots/3280898/border-collie-icon.png" 
                    alt = "Dog tinder logo"  
                />
            </Link>
            <Link to = "/chat">
            <IconButton>
                <QuestionAnswerTwoToneIcon className =  "header_icon " fontSize= "large" />
            </IconButton> 
            </Link>
            
        </div>
    );
}

 export default Header;

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import React from 'react';
import "./SwipeButtons.css";


const SwipeBottons = () => {
    return (
        <div className = "swipeButtons">
            <IconButton className = "swipeButtons__repeat"> 
                <ReplayIcon fontSize ="large" />
            </IconButton>
            <IconButton className = "swipeButtons__left">
                <CloseIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__star">    
                <StartRateIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__right">
                <FavoriteIcon fontSize = "large"/>
            </IconButton>
            <IconButton className = "swipeButtons__lightning">
                <FlashOnIcon fontSize = "large"/>
            </IconButton>
        </div>
    );
};

export default SwipeBottons;

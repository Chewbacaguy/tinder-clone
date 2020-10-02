import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import database from "./firebase";



function TinderCards() {
    const [people, setPeople] = useState([]);
       
   
    //Piece of code which runs based on a condition JACKED IF STATEMENT
    useEffect(() => {
        //this is where the code runs
        //this will run ONCE when the component loads, and never again
        const unsubscribe = database
            .collection("people")
            .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            //this is the cleanup...
            unsubscribe();
        };

    }, []);

    //BAD
    // same thing as const people = [];
    //people.push('soonny', 'santi')

    //GOOD Push to an array in REACT
    //setPeople([...people, 'santi', 'angee'])
    //Always give KEYS in REACT (efficiently re render a list, app faster)


    return (
        <div>
            <h1> Tinder Cards </h1>
            <div className= "tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className ="swipe"
                        key = {person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div  
                            style = {{backgroundImage: 'url($(person.url))'}} 
                            className = "card"               
                        >
                            <h3>{person.name} </h3>
                        </div>
                    </TinderCard>
                ))}
               </div>

        </div>
    );
}

export default TinderCards;

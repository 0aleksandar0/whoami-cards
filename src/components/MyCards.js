import { React, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "../MyCards.css";
import axios from "../axios";

function MyCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/whoami/cards");
      setPeople(req.data); //set the setPeople for whatever requested data comes back
    }
    fetchData();
  }, []); // the empty square brackets are used to run the code only once

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("revoming: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="MyCards">
      <div className="myCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]} // only swipe left and right
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default MyCards;

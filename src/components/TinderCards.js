import { SwipeableDrawer } from "@mui/material";
import { React, useState } from "react";
import TinderCard from "react-tinder-card";
import "../TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Aleksandar",
      url: "/images/me.jpg",
    },
    {
      name: "Rimma",
      url: "/images/rimma.jpg",
    },
    {
      name: "Leon",
      url: "/images/leon.jpg",
    },
    {
      name: "Maja",
      url: "/images/maja.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("revoming: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="TinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]} // only swipe left and right
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
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

export default TinderCards;

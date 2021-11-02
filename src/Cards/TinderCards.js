import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const line = database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      line();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h2>{person.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

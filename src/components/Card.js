import React, { useContext } from "react";

import GetCardContext from "../context/GetCardContext";
import CardFront from "./CardFront";

const Card = () => {
  const { card } = useContext(GetCardContext);
  console.log("data coming from context wrap in App.js: ", card);

  return (
    <>
      {/* Mapping thorugh object */}
      <div>
        {card.map((cards) => (
          <CardFront
            key={cards.id}
            question={cards.question}
            answer={cards.answer}
          />
        ))}
      </div>
    </>
  );
};

export default Card;

import React from "react";
import { useSelector } from "react-redux";
import { PokemonCardGrid } from "../Components";
import { useParams } from "react-router-dom";

function DeckDetails() {
  const param = useParams();
  const getDeckById = (id) => (store) => {
    return store.decks.deckList.find((i) => i.ID == id).Deck;
  };
  const deckDetails = useSelector(getDeckById(param.id));

  return (
    <div>
      <h1>Deck Details</h1>
      <h3>Pokemon Cards</h3>
      <PokemonCardGrid cardList={deckDetails.Pokemon} />

      <h3>Energy Cards</h3>
      <PokemonCardGrid cardList={deckDetails.Energy} />

      <h3>Trainer Cards</h3>
      <PokemonCardGrid cardList={deckDetails.Trainer} />
    </div>
  );
}

export default DeckDetails;

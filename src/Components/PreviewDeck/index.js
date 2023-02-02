import React from "react";
import PokemonCardGrid from "../CardGrid";
import { Button } from "@mui/material";

function PreviewDeck(props) {
  const { deckDetails, handleSaveDeck, handleRegenerate } = props;

  return (
    <div>
      <h1>
        Preview Deck - {deckDetails.TYPE}
        <Button
          variant="outlined"
          color="success"
          style={{ marginLeft: 20 }}
          onClick={async () => await handleSaveDeck(deckDetails)}
        >
          Save This Deck
        </Button>
        <Button
          variant="outlined"
          style={{ marginLeft: 20 }}
          onClick={() => handleRegenerate()}
        >
          Regenerate Deck
        </Button>
      </h1>
      <h3>Pokemon Cards ({deckDetails.Pokemon?.length})</h3>
      <PokemonCardGrid cardList={deckDetails.Pokemon} />

      <h3>Energy Cards ({deckDetails.Energy?.length})</h3>
      <PokemonCardGrid cardList={deckDetails.Energy} />

      <h3>Trainer Cards ({deckDetails.Trainer?.length})</h3>
      <PokemonCardGrid cardList={deckDetails.Trainer} />
    </div>
  );
}

export default PreviewDeck;

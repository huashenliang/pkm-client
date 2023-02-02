import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";

function MainDeck(props) {
  const { deckId, deck, deckCoverImage } = props;
  const navigate = useNavigate();

  const handleRowClick = (deckId) => {
    navigate(`/deck/${deckId}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345, minHeight: 385, margin: 2 }}
      onClick={() => handleRowClick(deckId)}
    >
      <CardActionArea>
        <CardMedia component="img" image={deckCoverImage} />

        <CardContent>
          <Typography color="black" gutterBottom variant="h5" component="div">
            {deck.Name} - {deck.TYPE}
          </Typography>
          <Typography variant="body2">
            Pokemon: {deck.Pokemon.length}, Energy: {deck.Energy.length},
            Trainer: {deck.Trainer.length}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MainDeck;

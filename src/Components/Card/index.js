import React from "react";

import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";

function PokemonCard(props) {
  const { cardInfo } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={cardInfo.images?.large}
          alt={cardInfo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {cardInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {cardInfo.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rarity: {cardInfo.rarity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;

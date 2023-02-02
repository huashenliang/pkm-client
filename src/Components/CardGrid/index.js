import React from "react";

import { Grid } from "@mui/material";
import PokemonCard from "../Card";

function PokemonCardGrid(props) {
  const { cardList } = props;
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {cardList.map((elem) => (
        <Grid item xs={12} sm={6} md={3} key={elem.id}>
          <PokemonCard cardInfo={elem} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonCardGrid;

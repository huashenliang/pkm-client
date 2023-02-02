import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeckListAction } from "../Actions/getDeckListAction";
import { MainDeck, LoadingMessage } from "../Components";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
} from "@mui/material";

function DeckList() {
  const dispatch = useDispatch();
  const [currentType, setCurrentType] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const deckList = useSelector((state) => state.decks.deckList);
  const loading = useSelector((state) => state.decks.loading);

  const handleSelectChange = (e) => {
    setCurrentType(e.target.value);
  };

  useEffect(() => {
    dispatch(getDeckListAction());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (deckList && deckList.length) {
      setFilteredList(
        deckList.filter(
          (i) => i.Deck.TYPE.toLowerCase() === currentType.toLowerCase()
        )
      );
    }
  }, [currentType, deckList]);

  if (loading || !deckList)
    return <LoadingMessage message={"Loading Decks..."} />;

  const deckTypeList = [...new Set(deckList.map((i) => i.Deck.TYPE))];
  const listToDisplay = currentType && filteredList ? filteredList : deckList;

  return (
    <div>
      <h1>DeckList</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">
            Filter deck by Pokemon type
          </InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={currentType}
            label="Pokemon Type"
            onChange={handleSelectChange}
          >
            {deckTypeList.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button style={{ color: "#3B4CCA" }} onClick={() => setCurrentType("")}>
          Clear Filter
        </Button>
      </Box>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: 25 }}
      >
        {listToDisplay.map((i) => (
          <MainDeck
            key={i.ID}
            deckId={i.ID}
            deck={i.Deck}
            deckCoverImage={i.Deck.Pokemon[0].images.large}
          />
        ))}
      </Grid>
    </div>
  );
}

export default DeckList;

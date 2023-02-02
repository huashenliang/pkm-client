import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonTypes } from "../Actions/getTypeListAction";
import { PreviewDeck, LoadingMessage } from "../Components";
import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { generateDeck, saveDeck } from "../Utils/api";
import { toast } from "react-toastify";

function GenerateDeck() {
  const dispatch = useDispatch();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSavingDeck, setIsSavingDeck] = useState(false);
  const [previewDeck, setPreviewDeck] = useState();

  const typeList = useSelector((state) => state.types.pokemonTypes);
  const loading = useSelector((state) => state.types.loading);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const res = await generateDeck(
        e.target.pokemonType.value,
        e.target.deckName.value
      );
      setPreviewDeck(res.data);
    } catch (error) {
      toast.error("Unable to generate deck, please try again");
    }

    setIsGenerating(false);
  }

  async function handleSaveDeck(deck) {
    setIsSavingDeck(true);
    try {
      await saveDeck(deck);
      toast.success("Successfully saved new deck");
    } catch (error) {
      toast.error("Unable to save, please try again");
    }
    setPreviewDeck();
    setIsSavingDeck(false);
  }

  function handleRegenerate() {
    setPreviewDeck();
  }

  useEffect(() => {
    console.log("dispatching....");
    dispatch(getPokemonTypes());
  }, []);

  if (loading || !typeList) return <LoadingMessage message={"Loading..."} />;

  if (isSavingDeck) return <LoadingMessage message={"Saving Deck..."} />;

  if (isGenerating)
    return <LoadingMessage message={"Generating Pokemon Deck..."} />;

  if (!isGenerating && previewDeck) {
    return (
      <PreviewDeck
        deckDetails={previewDeck}
        handleSaveDeck={handleSaveDeck}
        handleRegenerate={handleRegenerate}
      />
    );
  }

  return (
    <div>
      <h1>Generate New Deck</h1>
      <h3>Please select a pokemon type to generate your deck </h3>
      <Box
        component="form"
        sx={{ minWidth: 120, maxWidth: "60%" }}
        onSubmit={async (e) => await handleFormSubmit(e)}
      >
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Pokemon Type</InputLabel>
          <Select
            required
            labelId="simple-select-label"
            id="simple-select"
            name="pokemonType"
            defaultValue=""
            label="Pokemon Type"
          >
            {typeList.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>

          <TextField
            required
            id="outlined-name"
            name="deckName"
            label="Deck Name"
            defaultValue=""
            style={{ marginTop: 30 }}
          />
        </FormControl>
        <Button variant="contained" type="submit" style={{ marginTop: 20 }}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default GenerateDeck;

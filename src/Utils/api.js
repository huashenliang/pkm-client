import httpClient from "./axiosHelper";

export const getDeckList = async () => {
  const res = await httpClient.get(`/getDeckList`);
  return res;
};

export const getTypeList = async () => {
  const res = await httpClient.get(`/getPokemonTypes`);
  return res;
};

export const generateDeck = async (pokemonType, deckName) => {
  const res = await httpClient.post(`/generateDeck`, {
    PokemonType: pokemonType,
    DeckName: deckName,
  });
  return res;
};

export const saveDeck = async (deck) => {
  const res = await httpClient.post(`/saveDeck`, {
    Deck: deck,
  });
  return res;
};

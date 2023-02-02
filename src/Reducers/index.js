import { combineReducers } from "redux";

import deckReducer from "./Api/deckReducer";
import pokemonTypeReducer from "./Api/pokemonTypeReducer";
export default combineReducers({
  decks: deckReducer,
  types: pokemonTypeReducer,
});

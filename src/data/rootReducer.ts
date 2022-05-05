import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemons/pokemonsSlice";

export const rootReducer = combineReducers({
	pokemons: pokemonsReducer,
});

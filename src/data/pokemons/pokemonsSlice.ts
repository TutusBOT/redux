import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiList } from "../../models/ApiList";
import { PokemonsListResponse } from "../../models/PokemonsListResponse";
import { RootState } from "../store/store";

type PokemonsState = {
	data: PokemonsListResponse[];
	offset: number;
	error: null | string;
};

export const initialState: PokemonsState = {
	data: [],
	offset: 0,
	error: null,
};

const slice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		fetchSuccess: (
			state,
			{ payload }: PayloadAction<ApiList<PokemonsListResponse>>
		) => {
			const { results } = payload;
			state.data.push(...results);
			state.offset += results.length;
		},
		fetchFailure: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
		},
		deleteAll: (state) => {
			state.data = [];
			state.error = null;
			state.offset = 0;
		},
		deleteOne: (state, { payload }: PayloadAction<string>) => {
			state.data = state.data.filter((pokemon) => pokemon.name !== payload);
		},
	},
});

export const pokemonActions = {
	fetch: createAction<number>("pokemons/fetch"),
	fetchSuccess: createAction<ApiList<PokemonsListResponse>>(
		"pokemons/fetchSuccess"
	),
	fetchFailure: createAction<unknown>("pokemons/fetchFailure"),
	deleteAll: createAction("pokemons/deleteAll"),
	deleteOne: createAction<string>("pokemons/deleteOne"),
};

export const getPokemonsListOffsetSelector = (store: RootState) => {
	store.rootReducer.pokemons;
};

export default slice.reducer;

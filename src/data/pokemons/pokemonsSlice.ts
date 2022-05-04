import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: <any>[],
	offset: 0,
	error: null,
};

const todoSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		fetchSuccess: (state, { payload }) => {
			const { results } = payload;
			state.data.push(...results);
			state.offset += results.lenght;
		},
		fetchFailure: (state, { payload }) => {
			state.error = payload.error;
		},
	},
});

const pokemonActions = {
	fetch: createAction("pokemons/fetch"),
	fetchSuccess: createAction("pokemons/fetchSuccess"),
	fetchFailure: createAction("pokemons/fetchFailure"),
};

export default todoSlice;

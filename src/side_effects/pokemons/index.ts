import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { getPokemons } from "../../api/pokemons";
import {
	getPokemonsListOffsetSelector,
	pokemonActions,
} from "../../data/pokemons/pokemonsSlice";
import { ApiList } from "../../models/ApiList";
import { PokemonsListResponse } from "../../models/PokemonsListResponse";

function* fetchPokemons(action: PayloadAction<number | undefined>) {
	try {
		const offset: number = yield select(getPokemonsListOffsetSelector); // gets data from the store
		const pokemonData: ApiList<PokemonsListResponse> = yield call(
			getPokemons,
			action.payload ?? 10,
			offset
		);
		yield put(pokemonActions.fetchSuccess(pokemonData));
	} catch (error) {
		yield put(pokemonActions.fetchFailure(error));
	}
}

export default function* pokemonsSagas() {
	yield takeLatest(pokemonActions.fetch.type, fetchPokemons);
}

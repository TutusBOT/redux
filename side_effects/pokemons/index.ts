import { select } from "redux-saga/effects";

function* fetchPokemons() {
	try {
		const offset = yield select((store) => {
			store.pokemons.offset;
		}); // gets data from the store
	} catch (error) {}
}
